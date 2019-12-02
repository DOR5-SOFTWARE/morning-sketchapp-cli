# m-sketch [![Build Status](https://travis-ci.com/anton-morning/m-sketch.svg?branch=master)](https://travis-ci.com/anton-morning/m-sketch)

> morning.agency sketch cli tool


## Install

```
$ npm install m-sketch
```


## Usage

```js
const mSketch = require('m-sketch');

mSketch('unicorns');
//=> 'unicorns & rainbows'
```


## API

### mSketch(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global m-sketch
```

```
$ m-sketch --help

  Usage
    m-sketch [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ m-sketch
    unicorns & rainbows
    $ m-sketch ponies
    ponies & rainbows
```
