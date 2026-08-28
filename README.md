# Standard Notes Markmap Editor

A [Standard Notes](https://standardnotes.com/) editor that turns Markdown into an interactive mind map. Write headings and nested lists on the left; pan and zoom the generated map on the right.

**Plugin page:** [https://kjelly.github.io/sn-markmap/](https://kjelly.github.io/sn-markmap/)

## Features

- Markdown editor with a live Markmap preview
- Resizable desktop split pane and a mobile-friendly stacked layout
- Fit, zoom, and preview toggle controls
- Example content for a quick start
- Standard Notes theme variables, keyboard focus styles, and reduced-motion support

## Install in Standard Notes

Open the [plugin page](https://kjelly.github.io/sn-markmap/) to preview the editor. To install it in Standard Notes, import this manifest URL—not the editor page URL:

[https://raw.githubusercontent.com/kjelly/sn-markmap/main/public/sample.ext.json](https://raw.githubusercontent.com/kjelly/sn-markmap/main/public/sample.ext.json)

1. Open Standard Notes on the web or desktop app.
2. Open **Extensions**. Depending on the app version, this may be under **Preferences → Plugins**.
3. Choose **Import Extension** or **Install Custom Plugin**.
4. Paste the manifest URL above and confirm the install.
5. Activate **markmap** if Standard Notes asks you to do so.
6. Open a note and choose **markmap** from the editor menu below the note title.

The editor stores plain Markdown in the note, so the content remains readable if you switch back to another editor.

### Why are there two URLs?

- **GitHub Raw** hosts `sample.ext.json`. Standard Notes allows this domain in its Content Security Policy, so it is the URL used for installation and updates.
- **GitHub Pages** hosts the editor application at `https://kjelly.github.io/sn-markmap/index.html`, which the manifest loads after installation.

Do not paste `https://kjelly.github.io/sn-markmap/sample.ext.json` into Standard Notes: the app blocks requests to the GitHub Pages domain before it can read the manifest.

> Custom plugins are third-party code. Install only from sources you trust. See the [Standard Notes plugin installation guide](https://standardnotes.com/help/85/how-do-i-install-third-party-plugins) for more detail.

## Use the editor

Start with a heading and add nested headings or lists. For example:

```md
# Project plan

## Research

- Gather requirements
- Review references

## Build

- Create the first draft
- Test the flow
```

The preview updates shortly after you pause typing. Use the toolbar to fit the map to the pane, zoom, change the editor width, or toggle the preview. When the map is empty, use the button in the canvas to load example content. You can also drag the map to pan and scroll to zoom.

## Develop locally

### Prerequisites

- Node.js 26
- Yarn classic 1.22.x
- A Standard Notes web or desktop client

Install dependencies:

```bash
git clone https://github.com/kjelly/sn-markmap.git
cd sn-markmap
yarn install --ignore-engines
```

`--ignore-engines` is required because an older transitive Standard Notes package has a stale Node version declaration, although the plugin is built and tested with Node 26.

Start the development server:

```bash
yarn start
```

The editor is available at `http://localhost:8001`.

### Install the local build in Standard Notes

1. Create `public/ext.json` from the sample:

   ```bash
   cp public/sample.ext.json public/ext.json
   ```

2. Edit `public/ext.json`:

   ```json
   {
     "url": "http://localhost:8001/index.html",
     "latest_url": "http://localhost:8001/ext.json"
   }
   ```

3. Keep `yarn start` running.
4. In Standard Notes, open **Extensions** and import `http://localhost:8001/ext.json`.
5. Activate the editor, open a note, and select **markmap** from the note's editor menu.

For a production-like local check, update those two URLs to port `3000`, then build and serve the generated files with CORS enabled:

```bash
yarn build
npx http-server ./build -p 3000 --cors
```

Import `http://localhost:3000/ext.json` in Standard Notes.

## Quality checks

```bash
# Run the Jest suite once
CI=true yarn test --watchAll=false --runInBand

# Create a production build
yarn build
```

## Deployment

Pushing to `main` runs the GitHub Actions workflow and publishes `build/` to the `gh-pages` branch. GitHub Pages then serves the editor at:

`https://kjelly.github.io/sn-markmap/`

The install manifest is intentionally served from the `main` branch through GitHub Raw:

`https://raw.githubusercontent.com/kjelly/sn-markmap/main/public/sample.ext.json`

After pushing a manifest change, wait for the Pages workflow to complete before installing it: the manifest is updated by the `main` push, while its editor URL must point to the corresponding GitHub Pages deployment.

The workflow can also be started manually from the repository's **Actions** tab. For a local fallback, `yarn deploy-stable` builds and publishes directly to `gh-pages`.

## Project structure

- `src/components/Editor.tsx` — Standard Notes bridge, Markdown editor, and Markmap controls
- `src/stylesheets/main.scss` — responsive layout and accessibility styles
- `public/sample.ext.json` — Standard Notes manifest, served to installers through GitHub Raw
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment workflow

## License

[AGPL-3.0-or-later](LICENSE)
