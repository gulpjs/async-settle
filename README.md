async-settle
============

[![build status](https://secure.travis-ci.org/phated/async-settle.png)](http://travis-ci.org/phated/async-settle)

Settle your async functions - when you need to know all your parallel functions are complete (success or failure)

Handles completion and errors for callbacks, promises, observables and streams.

Will run call the function on `nextTick`. This will cause all functions to be async.

## Usage

### Successful completion

```js
var asyncSettle = require('async-settle');

asyncSettle(function(done){
  // do async things
  done(null, 2);
}, function(error, result){
  // `error` will ALWAYS be null on execution of the first function.
  // `result` will ALWAYS be a settled object with the result or error of the first function.
});
```

### Failed completion

```js
var asyncSettle = require('async-settle');

asyncSettle(function(done){
  // do async things
  done(new Error('Some Error Occurred'));
}, function(error, result){
  // `error` will ALWAYS be null on execution of the first function.
  // `result` will ALWAYS be a settled object with the result or error of the first function.
});
```

## API

### `asyncSettle(fn, callback)`

Takes a function to execute (`fn`) and a function to call on completion (`callback`).

#### `fn([done])`

Optionally takes a callback to call when async tasks are complete.

Executed in the context of [`async-done`](https://github.com/phated/async-done), with all errors and results being settled.

Completion is handled by [`async-done` completion and error resolution](https://github.com/phated/async-done#completion-and-error-resolution).

#### `callback` will be called with a settled object.

#### Settled Object

Settled values have two properties, `state` and `value`.

`state` has two possible options `'error'` and `'success'`.

`value` will be the value passed to original callback.

## License

MIT
