
<p align="center">
  <a href="https://www.youtube.com/watch?v=1mSxdSbgjc8"><img src="https://github.com/jina-ai/jinabox.js/blob/master/img/jinabox-logo.svg" alt="Jinabox.js banner" width="60%"></a>
</p>

[![npm](https://img.shields.io/npm/v/jinabox)](https://www.npmjs.com/package/jinabox)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/jinabox)](http://unpkg.com/jinabox)
[![Jina](https://github.com/jina-ai/jina/blob/master/.github/badges/jina-badge.svg?raw=true  "We fully commit to open-source")](https://jina.ai)
[![Jina Box](https://github.com/jina-ai/jina/blob/master/.github/badges/license-badge.svg?raw=true  "Jina is licensed under Apache-2.0")](#license)

`jinabox.js` is a lightweight, customizable set of components for querying and displaying results from Jina flows. You can use it for searching text, images, videos, audio or any kind of data with [a Jina backend](https://github.com/jina-ai/jina).


- [Learn Jina: the fastest way to build cloud-native neural search](https://github.com/jina-ai/jina)
- [Features](#features)
- [Jinabox in Action](#jinaboxjs-in-action)
- [Adding Jinabox to Your Project](#adding-jinaboxjs-to-your-project)
- [Supported MIME types](#supported-mime-types)
- [Configuration](#configuration)

## Features
- `<jina-searchbar></jina-searchbar>` 
	- perform queries and view results in a single component
- `<jina-results></jina-results>`
	- place results from searchbar in a separate area
- `<jina-floater></jina-floater>`
	- standalone floating icon to enable searches from anywhere in the application
- `<jina-floater-chat></jina-floater-chat>`
	- jina floater in the style of a chat application
  
- Easy-to-use [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) for Jina search backend
- Users can drag and drop multi-modal data as search queries
- Webcam and microphone support (in progress, contributions welcome! ❤️)
- Visualize search results in a dropdown list or separate container
- Highly customizable

## jinabox.js in Action

### Spin up a Jina Docker Image
`jinabox.js` is a frontend for querying [Jina](https://get.jina.ai) flows. You will need to spin up a Jina backend to get search results. Based on what you want to search, run one of our example Jina backends:
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
**Important:** If you are using a remote endpoint (non-localhost), make sure it is using HTTPS, not HTTP. Otherwise, JinaBox will not be able to make requests to your flow.

### Start Searching!

Drag and drop images, video, or audio, or type in text to search.

## Adding jinabox.js to Your Project

<a href="https://www.youtube.com/watch?v=1mSxdSbgjc8"><img align="right" width="350px" src="https://github.com/jina-ai/jinabox.js/blob/master/.github/jinabox.gif?raw=true " /></a>

In your HTML source, include the minified script and initialize it with your endpoint:

```html
<script src="https://unpkg.com/jinabox"></script>
<script>
    jb = window.JinaBox
    jb.init('http://localhost:65481/api/search');  // http://localhost:65481/api/search is the endpoint of the REST gateway of a Jina flow with REST enabled.
</script>
```

Then add the jinabox [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) into your application:

```html
<jina-searchbar></jina-searchbar>

<!--or-->

<jina-floater></jina-floater>
```

Now you can drag anything from anywhere (local/browser/webpage) to it and conduct the search.

Ready to learn Jina? [Read our 101 tutorials](https://101.jina.ai).

### Installation via package manager

```bash
npm install jinabox
```
or
```
yarn add jinabox
```

## Supported MIME types

| MIME type                                                                       | Input (Query)              | Output (Result)                         | Description                                                                                                                                                                                                                  |
| ---                                                                             | ---                        | ---                                     | ---                                                                                                                                                                                                                          |
| [`text`](https://www.iana.org/assignments/media-types/media-types.xhtml#text)   | Typing                     | List only                               | Text-only data including any human-readable content, source code, or textual data such as comma-separated value (CSV) formatted data. Examples include `text/plain`, `text/csv`, and `text/html`.                         |
| [`image`](https://www.iana.org/assignments/media-types/media-types.xhtml#image) | Drag-and-drop              | `<img>` Containers in list/grid view    | Image or graphical data including both bitmap and vector still images as well as animated versions of still image formats like animated GIF or APNG. Common examples are `image/jpeg`, `image/png`, and `image/svg+xml`. |
| [`video`](https://www.iana.org/assignments/media-types/media-types.xhtml#video) | Drag-and-drop, webcam      | `<video>`  containers in list/grid view | Video data or files, such as MP4 movies (`video/mp4`).                                                                                                                                                                       |
| [`audio`](https://www.iana.org/assignments/media-types/media-types.xhtml#audio) | Drag-and-drop, webcam, mic | `<audio>`  containers in list view      | Audio or music data. Examples include `audio/mpeg`, `audio/vorbis`.                                                                                                                                                          |

## Configuration

Play with and preview jinabox configurations here: https://jina.ai/jinabox.js/

| Setting                    | Default             | Type    | Description                                                                                                                                                 |
|----------------------------|---------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `theme`                    | `default`           | string  | Color theme: `default`, `persian`, `pompelmo`, `honeybee`                                                                                                   |
| `searchIcon`               | `color`             | string  | Searchbar icon: `color`, `mono`, `inverse`, or a URL                                                                                                        |
| `showDropzone`             | `true`              | boolean | Show expanding drop zone when dragging files                                                                                                                |
| `resultsLocation`          | `dropdown`          | string  | Where to display results: `dropdown` or `external`. When selecting external, results will be rendered in the element corresponding to the `results-area-id` |
| `resultsAreaId`            | `jina-results-area` | string  | ID of where results will be rendered if `resultsLocation` is set to `external`                                                                              |
| `typewriterEffect`         | `false`             | boolean | Enable typewriter effect on the placeholder                                                                                                                 |
| `typewriterDelayItem`      | `1000`              | number  | Time (ms) delay between every placeholder switch when `typewriterEffect` is enabled                                                                         |
| `typewriterDelayCharacter` | `50`                | number  | Time (ms) delay between each character when `typwriterEffect` is enabled                                                                                    |
| `userMediaHeight`          | `500`               | number  | Webcam feed and capture height                                                                                                                              |
| `userMediaWidth`           | `300`               | number  | Webcam feed and capture width                                                                                                                               |
| `acceptAudio`              | `true`              | boolean | Allow search with audio queries                                                                                                                             |
| `acceptVideo`              | `true`              | boolean | Allow search with video queries                                                                                                                             |
| `acceptText`               | `true`              | boolean | Allow search with text queries                                                                                                                              |
| `acceptImage`              | `true`              | boolean | Allow search with image queries                                                                                                                             |

### Expected Response Structure

`jinabox.js` expects query responses to contain either of the following structures

```json
{
  "search": {
    "docs": [
      {
        "topkResults": [
          {
            "matchDoc": {
              "docId": 14704,
              "weight": 1,
              "uri": "data:image/png;charset=utf,...",
              "mimeType":"image/png"
            }
          }
        ],
        "uri":"data:image/jpeg;...",
        "mimeType":"image/jpeg"
      }
    ]
  }
}

```
or

```json
{
  "search": {
    "docs": [
      {
        "matches": [
          {
            "docId": 14704,
            "weight": 1,
            "uri": "data:image/png;charset=utf,...",
            "mimeType":"image/png"
          }
        ],
        "uri":"data:image/jpeg;...",
        "mimeType":"image/jpeg"
      }
    ]
  }
}

```

## Browser Support

`jinabox.js` runs on modern browsers including Chrome, Firefox, Safari (desktop and mobile) and Opera. Certain features (like recording audio/video) are not available on all browsers and jinabox will make these features available accordingly.

## Troubleshooting

### SSL Error on Localhost

Try `http://localhost:65481/api/search`, make sure to use `http` and `localhost`, instead of `0.0.0.0`.

### Requests hanging or failing

Query your api with `curl` to ensure it is properly receiving, processing, and responding to requests. Ensure responses meet `jinabox` [expected response structure](#expected-response-structure).

## Contributing

We welcome all kinds of contributions from the open-source community, individuals and partners. We owe our success to your active involvement.

-   [Contributing guidelines](https://github.com/jina-ai/jina/blob/master/CONTRIBUTING.md)
-   [Release cycles and development stages](https://github.com/jina-ai/jina/blob/master/RELEASE.md)

## Community

- [Code of conduct](https://github.com/jina-ai/jina/blob/master/.github/CODE_OF_CONDUCT.md) - play nicely with the Jina community
- [Slack workspace](https://slack.jina.ai) - join #general on our Slack to meet the team and ask questions
- [YouTube channel](https://youtube.com/c/jina-ai) - subscribe to the latest video tutorials, release demos, webinars and presentations.
- [LinkedIn](https://www.linkedin.com/company/jinaai/) - get to know Jina AI as a company and find job opportunities
- [![Twitter Follow](https://img.shields.io/twitter/follow/JinaAI_?label=Follow%20%40JinaAI_&style=social)](https://twitter.com/JinaAI_) - follow and interact with us using hashtag `#JinaSearch`
- [Company](https://jina.ai) - know more about our company and how we are fully committed to open-source.

## Open Governance

As part of our open governance model, we host Jina's [Engineering All Hands]((https://hanxiao.io/2020/08/06/Engineering-All-Hands-in-Public/)) in public. This Zoom meeting recurs monthly on the second Tuesday of each month, at 14:00-15:30 (CET). Everyone can join in via the following calendar invite.

- [Add to Google Calendar](https://calendar.google.com/event?action=TEMPLATE&tmeid=MHIybG03cjAwaXE3ZzRrYmVpaDJyZ2FpZjlfMjAyMDEwMTNUMTIwMDAwWiBjXzF0NW9nZnAyZDQ1djhmaXQ5ODFqMDhtY200QGc&tmsrc=c_1t5ogfp2d45v8fit981j08mcm4%40group.calendar.google.com&scp=ALL)
- [Download .ics](https://hanxiao.io/2020/08/06/Engineering-All-Hands-in-Public/jina-ai-public.ics)

The meeting will also be live-streamed and later published to our [YouTube channel](https://youtube.com/c/jina-ai).

## Join Us

Jina is an open-source project. [We are hiring](https://jobs.jina.ai) full-stack developers, evangelists, and PMs to build the next neural search ecosystem in open source.

## License

Copyright (c) 2020 Jina AI Limited. All rights reserved.

Jina is licensed under the Apache License, Version 2.0. [See LICENSE for the full license text.](LICENSE)
