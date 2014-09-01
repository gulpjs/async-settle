'use strict';

var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var beforeEach = lab.beforeEach;
var after = lab.after;
var afterEach = lab.afterEach;
var expect = require('lab').expect;

var settle = require('../');

describe('asyncSettle', function(){

  it('should transform success into settled success values', function(done){
    var val = 'value to be settled';
    settle(function(done){
      done(null, val);
    }, function(err, result){
      expect(result).to.have.property('state', 'success');
      expect(result).to.have.property('value', val);
      done(err);
    });
  });

  it('should transform errors into settled success values', function(done){
    var error = new Error('Error to be settled');
    settle(function(done){
      done(error);
    }, function(err, result){
      expect(result).to.have.property('state', 'error');
      expect(result).to.have.property('value', error);
      done(err);
    });
  });
});
