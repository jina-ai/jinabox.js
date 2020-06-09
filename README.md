# jinabox.js

[![Jina](https://github.com/jina-ai/jina/blob/master/.github/badges/jina-badge.svg?raw=true  "We fully commit to open-source")](https://jina.ai)
[![Jina Box](https://github.com/jina-ai/jina/blob/master/.github/badges/license-badge.svg?raw=true  "Jina is licensed under Apache-2.0")](#license)

`jinabox.js` is a lightweight, customizable omnibox. You can use it for searching text, images, videos, audios or all kinds of data with a Jina backend.

[Demo page](https://jinaboxjs.jina.ai)

## Quick Start

In HTML, include the minified script:

```html
<script src="https://unpkg.com/jinabox.js"></script>
```

Create a container where the `jinabox` is to appear:

```html
<jinabox/>
```

Finally, load the `jinabox`:

```javascript
jb = window.JinaBox
jb.init('http://0.0.0.0:65481/api/search');
```

`http://0.0.0.0:65481/api/search` is the endpoint of the REST gateway of a Jina backend.

### Using with a module bundler

```bash
npm install --save jinabox.js
# or
yarn add jinabox.js
```

## What does it do?

- an easy-to-use web component for Jina search backend; 
- allow user to drag-and-drop multiple files as queries and do search;
- visualize the search results in the dropdown list.


## Browser support

`jinabox.js` runs on modern browsers supporting Web Audio, including Firefox, Chrome, Safari (desktop and mobile) and Opera.

## License

Copyright (c) 2020 Jina AI Limited. All rights reserved.

Jina is licensed under the Apache License, Version 2.0. [See LICENSE for the full license text.](LICENSE)
