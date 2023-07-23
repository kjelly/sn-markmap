import React from 'react';
import EditorKit, { EditorKitDelegate } from '@standardnotes/editor-kit';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import MarkdownEditor from '@uiw/react-markdown-editor';



const transformer = new Transformer();

export enum HtmlElementId {
  snComponent = 'sn-component',
  textarea = 'textarea',
}

export enum HtmlClassName {
  snComponent = 'sn-component',
  textarea = 'sk-input contrast textarea',
}

export interface EditorInterface {
  printUrl: boolean;
  text: string;
}

const initialState = {
  printUrl: false,
  text: '',
  value: '',
};

let keyMap = new Map();

export default class Editor extends React.Component<{}, EditorInterface> {
  private editorKit?: EditorKit;
  private svg?: SVGSVGElement;
  private mm?: Markmap;

  constructor(props: EditorInterface) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.configureEditorKit();
    this.mm = Markmap.create(this.svg!);
    this.updateSvg();
  }

  bindSvg = (el: any) => {
    this.svg = el;
  };

  updateSvg = () => {
    const { root } = transformer.transform(this.state.text);
    this.mm!.setData(root);
    this.mm!.fit();
  };

  configureEditorKit = () => {
    const delegate: EditorKitDelegate = {
      /** This loads every time a different note is loaded */
      setEditorRawText: (text: string) => {
        this.setState({
          ...initialState,
          text,
        });
        this.updateSvg();
      },
      clearUndoHistory: () => { },
      getElementsBySelector: () => [],
    };

    this.editorKit = new EditorKit(delegate, {
      mode: 'plaintext',
      supportsFileSafe: false,
    });
  };

  handleInputChangeString = (value: string) => {
    this.saveText(value);
    this.setState({ text: value }, this.updateSvg);
  };


  saveText = (text: string) => {
    this.saveNote(text);
    this.setState({
      text: text,
    });
  };

  saveNote = (text: string) => {
    /**
     * This will work in an SN context, but breaks the standalone editor,
     * so we need to catch the error
     */
    try {
      this.editorKit?.onEditorValueChanged(text);
    } catch (error) {
      console.log('Error saving note:', error);
    }
  };

  onBlur = (e: React.FocusEvent) => { };

  onFocus = (e: React.FocusEvent) => { };

  onKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
    keyMap.set(e.key, true);
    // Do nothing if 'Control' and 's' are pressed
    if (keyMap.get('Control') && keyMap.get('s')) {
      e.preventDefault();
    }
  };

  onKeyUp = (e: React.KeyboardEvent | KeyboardEvent) => {
    keyMap.delete(e.key);
  };

  render() {
    const { text } = this.state;
    return (
      <div
        className={
          HtmlElementId.snComponent + (this.state.printUrl ? ' print-url' : '')
        }
        id={HtmlElementId.snComponent}
        tabIndex={0}
      >
        <svg ref={this.bindSvg} />
        <MarkdownEditor
          value={text}
          onChange={(value, viewUpdate) => this.handleInputChangeString(value)} 
        />
      </div>
    );
  }
}
