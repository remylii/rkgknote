# rkgknote

[![Build Status](https://travis-ci.org/remylii/rkgknote.svg?branch=master)](https://travis-ci.org/remylii/rkgknote)

## Stack

- package manager: yarn
- transpiler: babel
- linter: eslint, flow
- test runner: ava
- coverage tools: nyc
- builder: webpack
- css: webpack use postcss
- minify: csswring, ugfily-js, html-minifier
- server: http-server, browser-sync

## Usage

```
$ yarn install
$ yarn start
#($ yarn start:local)
```

### Generating distribution

```
$ yarn run build:production
```

## Tasks

Use npm-scripts.

- server
- build
- ~~build:js~~
- ~~build:css~~
- build:production
- watch
- ~~watch:js~~
- ~~watch:css~~
- compress:js
- compress:css
- compress:html
- typecheck
- lint
- test
- cover

### if use postcss-cli

```sh
postcss -c postcss.config.js -o public/bundle.css styles/main.css
```



## License

MIT
