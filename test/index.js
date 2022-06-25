'use strict';

var expect = require('expect');

var settle = require('../');

describe('asyncSettle', function() {

  it('should transform success into settled success values', function(done) {
    var val = 'value to be settled';
    settle(function(done) {
      done(null, val);
    }, function(err, result) {
      expect(result).toEqual(
        expect.objectContaining({
          state: 'success',
          value: val,
        })
      );
      done(err);
    });
  });

  it('should transform errors into settled success values', function(done) {
    var error = new Error('Error to be settled');
    settle(function(done) {
      done(error);
    }, function(err, result) {
      expect(result).toEqual(
        expect.objectContaining({
          state: 'error',
          value: error,
        })
      );
      done(err);
    });
  });
});
