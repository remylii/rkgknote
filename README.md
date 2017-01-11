# rkgknote

[![Build Status](https://travis-ci.org/remylii/rkgknote.svg?branch=master)](https://travis-ci.org/remylii/rkgknote)

## Stack

- package manager: yarn
- transpiler: babel
- linter: eslint, flow
- test runner: ava
- coverage tools: nyc
- builder: webpack
- css: postcss
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
- build:js
- build:css
- build:production
- watch:js
- watch:css
- compress:js
- compress:css
- compress:html
- typecheck
- lint
- test
- cover

## License

MIT
