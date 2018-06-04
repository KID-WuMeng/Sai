// Generated by CoffeeScript 2.2.2
(function() {
  var Checker, Schema, get, isEmail, isURL;

  isEmail = require('validator/lib/isEmail');

  isURL = require('validator/lib/isURL');

  get = require('./get');

  Checker = require('./Schema.Checker');

  module.exports = Schema = class Schema {
    constructor() {
      this.test = this.test.bind(this);
      this.rule = this.rule.bind(this);
      this.format = this.format.bind(this);
      this._rules = {};
      this._formats = {};
      this.format('email', isEmail);
      this.format('url', isURL);
    }

    test(data, path) {
      //#######################################
      //|
      //|   @params {*}      data
      //|   @params {string} path
      //|
      //|   @return {Checker}
      //|
      //#######################################
      if (path) {
        data = get(data, path);
      }
      return new Checker({
        rules: this._rules,
        formats: this._formats,
        data: data
      });
    }

    rule(name, check) {
      //#######################################
      //|
      //|   @params {string}   name
      //|   @params {function} check(data)
      //|
      //|   @return {Schema} this
      //|
      //#######################################
      this._rules[name] = check;
      return this;
    }

    format(name, check) {
      //#######################################
      //|
      //|   @params {string}   name
      //|   @params {function} check(data)
      //|
      //|   @return {Schema} this
      //|
      //#######################################
      this._formats[name] = check;
      return this;
    }

  };

}).call(this);
