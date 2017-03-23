# rkgknote

[![Build Status](https://travis-ci.org/remylii/rkgknote.svg?branch=master)](https://travis-ci.org/remylii/rkgknote)

## Stack

- package manager: yarn
- transpiler: babel
- linter: eslint, flowtype, stylelint
- test runner: ava
- coverage tools: nyc
- builder: webpack
- css: webpack use postcss
- minify: csswring, ugfily-js, html-minifier
- server: webpack-dev-server, http-server

## Usage

```
$ yarn install
$ yarn start
```

### Generating distribution

```
$ yarn run build:dist
```

## Tasks

Use npm-scripts.

- start
- server:dist
- build:dist
- watch
- compress
  - compress:js # in webpack, soon
  - compress:css # in webpack, soon
  - compress:html # in webpack, soon
- typecheck
- lint
- lint:fix
- csslint
- test
- cover


## License

MIT
