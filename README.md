# Jina Box

### Install

`yarn`

### Run in Demo Mode

1. run Jina example such as South Park Search in query mode
2. modify `jinaURL` property in config.js to point to correct gRPC port
3. run command `node jinaServer`
4. run command `yarn start`
5. Jina box demo will be served on `http://localhost:3000` by default

### Current Features
- `jinaServer` client for consuming HTTP-JSON from frontend and piping to Jina via gRPC
- functional intercom-style popup with search bar and results 

### Upcoming Features
- Full results page
- Image, Gif support
