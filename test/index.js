"use strict";

var assert = require("node:assert");
var { describe, it } = require("node:test");

var settle = require("../");

describe("asyncSettle", function () {
  it("should transform success into settled success values", function (t, done) {
    var val = "value to be settled";
    settle(
      function (cb) {
        cb(null, val);
      },
      function (err, result) {
        assert.deepStrictEqual(result, {
          state: "success",
          value: val,
        });
        done(err);
      },
    );
  });

  it("should transform errors into settled success values", function (t, done) {
    var error = new Error("Error to be settled");
    settle(
      function (cb) {
        cb(error);
      },
      function (err, result) {
        assert.deepStrictEqual(result, {
          state: "error",
          value: error,
        });
        done(err);
      },
    );
  });
});
