<p align="center">
  <a href="https://github.com/jina-ai/jina"><img src="https://github.com/jina-ai/jinabox.js/blob/master/img/jinabox-logo.svg" alt="Jinabox.js banner" width="60%"></a>
</p>

[![npm](https://img.shields.io/npm/v/jinabox)](https://www.npmjs.com/package/jinabox)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/jinabox)](http://unpkg.com/jinabox)
[![Jina](https://github.com/jina-ai/jina/blob/master/.github/badges/jina-badge.svg?raw=true  "We fully commit to open-source")](https://jina.ai)
[![Jina Box](https://github.com/jina-ai/jina/blob/master/.github/badges/license-badge.svg?raw=true  "Jina is licensed under Apache-2.0")](#license)

`jinabox.js` is a lightweight, customizable omnibox. You can use it for searching text, images, videos, audios or all kinds of data with [a Jina backend](https://github.com/jina-ai/jina).

- [Demo page](https://jina.ai/jinabox.js/)
- [Learn Jina: the fastest way to build cloud-native neural search](https://github.com/jina-ai/jina)

## Quick Start

In HTML, include the minified script:

```html
<script src="https://unpkg.com/jinabox"></script>
<script>
    jb = window.JinaBox
    jb.init('http://0.0.0.0:65481/api/search');  // http://0.0.0.0:65481/api/search is the endpoint of the REST gateway of a Jina backend.
</script>
```

Then, create a container where the `jinabox` is to appear:

```html
<jinabox/>
```

Run [one of our examples](https://learn.jina.ai) and play! 

### Using with a module bundler

```bash
npm install --save jinabox
# or
yarn add jinabox
```

## Features

- an easy-to-use web component for Jina search backend; 
- allow user to drag-and-drop multi-modal data as queries to search;
- webcam and mic support (in progress, contribution welcome! ❤️);
- visualize the search results in a dropdown list or a separate container;
- highly customizable.

## Supported MIME types

| MIME type | Input (Query) | Output (Result) | Description | 
| --- | --- | --- | --- |
| [`text`](https://www.iana.org/assignments/media-types/media-types.xhtml#text) | typing | list only | Text-only data including any human-readable content, source code, or textual data such as comma-separated value (CSV) formatted data. Examples include `text/plain`, `text/csv`, and `text/html`. |
| [`image`](https://www.iana.org/assignments/media-types/media-types.xhtml#image) | drag-and-drop | `<img>` containers in list/grid view | Image or graphical data including both bitmap and vector still images as well as animated versions of still image formats such as animated GIF or APNG. Common examples are `image/jpeg`, `image/png`, and `image/svg+xml`. |
| [`video`](https://www.iana.org/assignments/media-types/media-types.xhtml#video) | drag-and-drop, webcam | `<video>`  containers in list/grid view | Video data or files, such as MP4 movies (`video/mp4`). |
| [`audio`](https://www.iana.org/assignments/media-types/media-types.xhtml#audio) | drag-and-drop, webcam, mic | `<audio>`  containers in list view | Audio or music data. Examples include `audio/mpeg`, `audio/vorbis`. |


## Browser support

`jinabox.js` runs on modern browsers supporting Web Audio, including Firefox, Chrome, Safari (desktop and mobile) and Opera.

## License

Copyright (c) 2020 Jina AI Limited. All rights reserved.

Jina is licensed under the Apache License, Version 2.0. [See LICENSE for the full license text.](LICENSE)
