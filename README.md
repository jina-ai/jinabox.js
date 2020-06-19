<p align="center">
  <a href="https://github.com/jina-ai/jina"><img src="https://github.com/jina-ai/jinabox.js/blob/master/img/jinabox-logo.svg" alt="Jinabox.js banner" width="60%"></a>
</p>

[![npm](https://img.shields.io/npm/v/jinabox)](https://www.npmjs.com/package/jinabox)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/jinabox)](http://unpkg.com/jinabox)
[![Jina](https://github.com/jina-ai/jina/blob/master/.github/badges/jina-badge.svg?raw=true  "We fully commit to open-source")](https://jina.ai)
[![Jina Box](https://github.com/jina-ai/jina/blob/master/.github/badges/license-badge.svg?raw=true  "Jina is licensed under Apache-2.0")](#license)

`jinabox.js` is a lightweight, customizable omnibox. You can use it for searching text, images, videos, audios or all kinds of data with [a Jina backend](https://github.com/jina-ai/jina).


- [Learn Jina: the fastest way to build cloud-native neural search](https://github.com/jina-ai/jina)
- [Jinabox in Action](#jinaboxjs-in-action)
- [Jinabox in Your Project](#jinaboxjs-in-your-project)
- [Features](#features)
- [Supported MIME types](#supported-mime-types)
- [Configuration](#configuration)

## jinabox.js in Action

### Spin up a Jina Docker Image

Based on what you want to search, run one of our example Jina backends:

- [Pokedex](https://github.com/jina-ai/examples/tree/master/pokedex-with-bit) (real image data): `docker run -p 65481:65481 -e "JINA_PORT=65481" jinaai/hub.app.bitsearch-pokedex search`
- [Southpark](https://github.com/jina-ai/examples/tree/master/southpark-search) (real text data): `docker run -p 45678:45678 jinaai/hub.app.distilbert-southpark`
- [MP4 mock](https://github.com/jina-ai/examples/tree/master/io-mock-app) (placeholder video data): `docker run -p 65481:65481 -e "JINA_PORT=65481" jinaai/hub.app.iomock.mp4 search`
- [Wav mock](https://github.com/jina-ai/examples/tree/master/io-mock-app) (placeholder audio data): `docker run -p 65481:65481 -e "JINA_PORT=65481" jinaai/hub.app.iomock.sound search` 

### Open jinabox.js in your Browser

Just go to https://jina.ai/jinabox.js/ in your browser to open up the search interface.

### Set Server Endpoint

Based on the Docker port you are exposing (i.e. `65481` or `45678` in above Docker images), set jinabox's server endpoint to:
```
http://localhost:<port_number>/api/search
```

### Start Searching!

Drag and drop images, video, or audio, or type in text to search.

## jinabox.js in Your Project

<img align="right" width="350px" src="https://github.com/jina-ai/jinabox.js/blob/master/.github/jinabox.gif?raw=true " />

In HTML, include the minified script:

```html
<script src="https://unpkg.com/jinabox"></script>
<script>
    jb = window.JinaBox
    jb.init('http://0.0.0.0:65481/api/search');  // http://0.0.0.0:65481/api/search is the endpoint of the REST gateway of a Jina backend.
</script>
```

Then create a container where the searchbar/floater is to appear:

```html
<jina-searchbar/>

<!--or-->

<jina-floater/>
```

Run one of our prebuilt backends:

- [Pokedex](https://github.com/jina-ai/examples/tree/master/pokedex-with-bit) (real image data): `docker run -p 65481:65481 -e "JINA_PORT=65481" jinaai/hub.app.bitsearch-pokedex search`
- [Southpark](https://github.com/jina-ai/examples/tree/master/southpark-search) (real text data): `docker run -p 45678:45678 jinaai/hub.app.distilbert-southpark`
- [MP4 mock](https://github.com/jina-ai/examples/tree/master/io-mock-app) (placeholder video data): `docker run -p 65481:65481 -e "JINA_PORT=65481" jinaai/hub.app.iomock.mp4 search`
- [Wav mock](https://github.com/jina-ai/examples/tree/master/io-mock-app) (placeholder audio data): `docker run -p 65481:65481 -e "JINA_PORT=65481" jinaai/hub.app.iomock.sound search` 

Now you can drag anything from anywhere (local/browser/webpage) to it and conduct the search.

Ready to learn Jina? [Read our 101 tutorials](https://101.jina.ai).

### Using with a module bundler

```bash
npm install jinabox
```
or
```
yarn add jinabox
```

## Features

- Easy-to-use web component for Jina search backend
- Users can drag and drop multi-modal data as search queries
- Webcam and microphone support (in progress, contributions welcome! ❤️)
- Visualize search results in a dropdown list or separate container
- Highly customizable

## Supported MIME types

| MIME type                                                                       | Input (Query)              | Output (Result)                         | Description                                                                                                                                                                                                                  |
| ---                                                                             | ---                        | ---                                     | ---                                                                                                                                                                                                                          |
| [`text`](https://www.iana.org/assignments/media-types/media-types.xhtml#text)   | Typing                     | List only                               | Text-only data including any human-readable content, source code, or textual data such as comma-separated value (CSV) formatted data. Examples include `text/plain`, `text/csv`, and `text/html`.                         |
| [`image`](https://www.iana.org/assignments/media-types/media-types.xhtml#image) | Drag-and-drop              | `<img>` Containers in list/grid view    | Image or graphical data including both bitmap and vector still images as well as animated versions of still image formats like animated GIF or APNG. Common examples are `image/jpeg`, `image/png`, and `image/svg+xml`. |
| [`video`](https://www.iana.org/assignments/media-types/media-types.xhtml#video) | Drag-and-drop, webcam      | `<video>`  containers in list/grid view | Video data or files, such as MP4 movies (`video/mp4`).                                                                                                                                                                       |
| [`audio`](https://www.iana.org/assignments/media-types/media-types.xhtml#audio) | Drag-and-drop, webcam, mic | `<audio>`  containers in list view      | Audio or music data. Examples include `audio/mpeg`, `audio/vorbis`.                                                                                                                                                          |

## Configuration

| Settings                   | Description                                          |
| ---                        | ---                                                  |
| `theme`                    | Color theme: `persian`, `pompelmo`, `honeybee`, none |
| `typewriterEffect`         | Enable typewriter effect on the placeholder          |
| `typewriterDelayItem`      | Time (ms) delay between every placeholder            |
| `typewriterDelayCharacter` | Time (ms) delay between each character               |

## Browser Support

`jinabox.js` runs on modern browsers supporting Web Audio, including Firefox, Chrome, Safari (desktop and mobile) and Opera.

## Troubleshooting

### SSL Error on Localhost

Try `http://localhost:65481/api/search`, make sure to use `http` and `localhost`, instead of `0.0.0.0`.

## License

Copyright (c) 2020 Jina AI Limited. All rights reserved.

Jina is licensed under the Apache License, Version 2.0. [See LICENSE for the full license text.](LICENSE)
