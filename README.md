# COVID-19 Visualizer Chrome Extension

A Chrome extension that lists countries based on their total COVID-19 cases. Users can click on a country to visit a website for full details.

## Features

-   [Svelte](https://svelte.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [CRXJS Vite Plugin](https://github.com/crxjs/chrome-extension-tools/blob/main/packages/vite-plugin/README.md)
-   [Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Demo

![Demo](/demo.gif)

## Development

```bash
# install dependencies
npm i

# build files to `/dist` directory
# HMR for extension pages and content scripts
npm run dev
```

### Load unpacked extensions

[Getting Started Tutorial](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
3. Click the `LOAD UNPACKED` button and select the `/dist` directory.

## Build

```bash
# build files to `/dist` directory
$ npm run build
```
