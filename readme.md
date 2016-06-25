# pole-wait [![Build Status](https://travis-ci.org/bendrucker/pole-wait.svg?branch=master)](https://travis-ci.org/bendrucker/pole-wait)

> Wait until a [pole](https://github.com/bendrucker/pole) poller responds with an expected result


## Install

```
$ npm install --save pole-wait
```


## Usage

```js
var wait = require('pole-wait')

wait(poll, (data) => data.foo, function (err, data) {
  console.log('got data!', data)
})
```

## API

#### `wait(poll, fn, callback)` -> `undefined`

##### poll

*Required*  
Type: `object`

A poll interface returned from [pole](https://github.com/bendrucker/pole).

##### fn

*Required*  
Type: `function`  
Arguments: `data`

A function to be called with the poll result. If the return value is truthy, the wait is considered complete and the poller is cancelled.

##### callback

*Required*  
Type: `function`
Arguments: `err, data`


## License

MIT © [Ben Drucker](http://bendrucker.me)
