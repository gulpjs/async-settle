'use strict';

var asyncDone = require('async-done');

function settle(fn, done){
  asyncDone(fn, function(error, result){
    var settled = {};

    if(error != null){
      settled.state = 'error';
      settled.value = error;
    } else {
      settled.state = 'success';
      settled.value = result;
    }

    done(undefined, settled);
  });
}

module.exports = settle;
