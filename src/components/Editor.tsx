import React from 'react';
import EditorKit, { EditorKitDelegate } from '@standardnotes/editor-kit';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import MarkdownEditor from '@uiw/react-markdown-editor';

const transformer = new Transformer();

const exampleMarkdown = `# Project plan

## Research
- Gather requirements
- Review references

## Build
- Create the first draft
- Test the flow

## Share
- Collect feedback
- Publish`;

export enum HtmlElementId {
  snComponent = 'sn-component',
}

export interface EditorInterface {
  printUrl: boolean;
  text: string;
  editorWidth: number;
  previewVisible: boolean;
}

const initialState: EditorInterface = {
  printUrl: false,
  text: '',
  editorWidth: 50,
  previewVisible: true,
};

export default class Editor extends React.Component<{}, EditorInterface> {
  private editorKit?: EditorKit;
  private container?: HTMLDivElement;
  private svg?: SVGSVGElement;
  private mm?: Markmap;
  private updateTimer?: number;

  constructor(props: {}) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.configureEditorKit();
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    this.mm = Markmap.create(this.svg!, {
      duration: prefersReducedMotion ? 0 : 300,
    });
    this.updateSvg(true);
  }

  componentWillUnmount() {
    if (this.updateTimer) {
      window.clearTimeout(this.updateTimer);
    }
    this.mm?.destroy();
  }

  bindContainer = (el: HTMLDivElement | null) => {
    this.container = el ?? undefined;
  };

  bindSvg = (el: SVGSVGElement | null) => {
    this.svg = el ?? undefined;
  };

  updateSvg = (fit = false) => {
    if (!this.mm) {
      return;
    }
    const { root } = transformer.transform(this.state.text);
    void this.mm.setData(root).then(() => {
      if (fit) {
        void this.mm?.fit();
      }
    });
  };

  scheduleMapUpdate = () => {
    if (this.updateTimer) {
      window.clearTimeout(this.updateTimer);
    }
    this.updateTimer = window.setTimeout(() => this.updateSvg(), 350);
  };

  configureEditorKit = () => {
    const delegate: EditorKitDelegate = {
      setEditorRawText: (text: string) => {
        this.setState({ ...initialState, text }, () => this.updateSvg(true));
      },
      clearUndoHistory: () => {},
      handleRequestForContentHeight: () => this.container?.scrollHeight,
    };

    this.editorKit = new EditorKit(delegate, { mode: 'plaintext' });
  };

  handleInputChange = (value: string) => {
    this.saveNote(value);
    this.setState({ text: value }, this.scheduleMapUpdate);
  };

  saveNote = (text: string) => {
    try {
      this.editorKit?.onEditorValueChanged(text);
    } catch (error) {
      console.error('Unable to save note:', error);
    }
  };

  loadExample = () => {
    this.saveNote(exampleMarkdown);
    this.setState({ text: exampleMarkdown }, () => this.updateSvg(true));
  };

  fitMap = () => void this.mm?.fit();

  zoomMap = (scale: number) => void this.mm?.rescale(scale);

  togglePreview = () =>
    this.setState(
      (state) => ({ previewVisible: !state.previewVisible }),
      () => {
        if (this.state.previewVisible) {
          window.requestAnimationFrame(this.fitMap);
        }
      }
    );

  setEditorWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ editorWidth: Number(event.target.value) }, () => {
      window.requestAnimationFrame(this.fitMap);
    });
  };

  render() {
    const { editorWidth, previewVisible, printUrl, text } = this.state;
    const hasContent = text.trim().length > 0;

    return (
      <main
        ref={this.bindContainer}
        className={`${HtmlElementId.snComponent}${
          printUrl ? ' print-url' : ''
        }${previewVisible ? '' : ' preview-hidden'}`}
        id={HtmlElementId.snComponent}
        style={
          { '--editor-pane-width': `${editorWidth}%` } as React.CSSProperties
        }
      >
        <header className="editor-toolbar" aria-label="Mind map controls">
          <div className="toolbar-group">
            <button
              className="toolbar-button"
              type="button"
              aria-label="Fit map to view"
              title="Fit map to view"
              onClick={this.fitMap}
            >
              Fit
            </button>
            <button
              className="toolbar-button"
              type="button"
              aria-label="Zoom out"
              title="Zoom out"
              onClick={() => this.zoomMap(0.8)}
            >
              −
            </button>
            <button
              className="toolbar-button"
              type="button"
              aria-label="Zoom in"
              title="Zoom in"
              onClick={() => this.zoomMap(1.2)}
            >
              +
            </button>
          </div>
          <div className="toolbar-group toolbar-layout-controls">
            <label className="pane-width-control">
              <span>Editor width</span>
              <input
                aria-label="Editor pane width"
                type="range"
                min="30"
                max="70"
                value={editorWidth}
                onChange={this.setEditorWidth}
              />
            </label>
            <button
              className="toolbar-button preview-toggle"
              type="button"
              aria-pressed={previewVisible}
              title={previewVisible ? 'Hide preview' : 'Show preview'}
              onClick={this.togglePreview}
            >
              {previewVisible ? 'Preview' : 'Show preview'}
            </button>
          </div>
        </header>

        <section className="workspace" aria-label="Markdown mind map workspace">
          <section className="editor-pane" aria-labelledby="editor-heading">
            <div className="pane-heading">
              <h1 id="editor-heading">Markdown</h1>
              <span>Changes update the map after a short pause</span>
            </div>
            <MarkdownEditor
              value={text}
              onChange={(value) => this.handleInputChange(value)}
            />
          </section>

          <section className="preview-pane" aria-labelledby="preview-heading">
            <div className="pane-heading">
              <h2 id="preview-heading">Mind map</h2>
              <span>
                {hasContent
                  ? 'Drag to pan, scroll to zoom'
                  : 'Start with Markdown'}
              </span>
            </div>
            <div className="map-canvas">
              {!hasContent && (
                <div className="empty-state" role="status">
                  <strong>Build a mind map from Markdown</strong>
                  <span>
                    Write a heading and nested list, or load the example to
                    begin.
                  </span>
                  <button
                    className="empty-state-button"
                    type="button"
                    onClick={this.loadExample}
                  >
                    Load example
                  </button>
                </div>
              )}
              <svg
                ref={this.bindSvg}
                aria-label="Interactive mind map preview"
                role="img"
              />
            </div>
          </section>
        </section>
      </main>
    );
  }
}
