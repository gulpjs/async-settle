'use strict';

var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;
var expect = require('code').expect;

var settle = require('../');

describe('asyncSettle', function() {

  it('should transform success into settled success values', function(done) {
    var val = 'value to be settled';
    settle(function(done) {
      done(null, val);
    }, function(err, result) {
      expect(result).to.include({
        state: 'success',
        value: val,
      });
      done(err);
    });
  });

  it('should transform errors into settled success values', function(done) {
    var error = new Error('Error to be settled');
    settle(function(done) {
      done(error);
    }, function(err, result) {
      expect(result).to.include({
        state: 'error',
        value: error,
      });
      done(err);
    });
  });
});
