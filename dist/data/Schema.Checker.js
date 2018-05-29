// Generated by CoffeeScript 2.2.2
(function() {
  var Checker, isArray, isBool, isBuffer, isDate, isNil, isNumber, isObject, isPlainObject, isString, mime;

  isNil = require('./isNil');

  isBool = require('./isBool');

  isNumber = require('./isNumber');

  isString = require('./isString');

  isBuffer = require('./isBuffer');

  isDate = require('./isDate');

  isArray = require('./isArray');

  isObject = require('./isObject');

  isPlainObject = require('./isPlainObject');

  mime = require('./mime');

  module.exports = Checker = class Checker {
    constructor(opt = {}) {
      this.required = this.required.bind(this);
      this.bool = this.bool.bind(this);
      this.number = this.number.bind(this);
      this.string = this.string.bind(this);
      this.buffer = this.buffer.bind(this);
      this.date = this.date.bind(this);
      this.array = this.array.bind(this);
      this.plainObject = this.plainObject.bind(this);
      this.is = this.is.bind(this);
      this.in = this.in.bind(this);
      this.min = this.min.bind(this);
      this.max = this.max.bind(this);
      this._min_number = this._min_number.bind(this);
      this._max_number = this._max_number.bind(this);
      this._min_string = this._min_string.bind(this);
      this._max_string = this._max_string.bind(this);
      this._min_buffer = this._min_buffer.bind(this);
      this._max_buffer = this._max_buffer.bind(this);
      this.mime = this.mime.bind(this);
      this.format = this.format.bind(this);
      this.rule = this.rule.bind(this);
      this._display = this._display.bind(this);
      //#######################################
      //|
      //|   @params {object} opt
      //|           {object} opt.rules   - {name: check(function)}
      //|           {object} opt.formats - {name: check(function)}
      //|           {*}      opt.data
      //|
      //#######################################
      this._rules = opt.rules;
      this._formats = opt.formats;
      this._data = opt.data;
    }

    required(error) {
      //#######################################
      //|
      //|   @params {*} error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if (isNil(this._data)) {
        throw error != null ? error : `data.Schema.Checker.required >>> Sorry, the data is required, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    bool(error) {
      //#######################################
      //|
      //|   @params {*} error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !isBool(this._data)) {
        throw error != null ? error : `data.Schema.Checker.bool >>> Sorry, the data should be a bool, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    number(error) {
      //#######################################
      //|
      //|   @params {*} error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !isNumber(this._data)) {
        throw error != null ? error : `data.Schema.Checker.number >>> Sorry, the data should be a number, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    string(error) {
      //#######################################
      //|
      //|   @params {*} error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !isString(this._data)) {
        throw error != null ? error : `data.Schema.Checker.string >>> Sorry, the data should be a string, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    buffer(error) {
      //#######################################
      //|
      //|   @params {*} error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !isBuffer(this._data)) {
        throw error != null ? error : `data.Schema.Checker.buffer >>> Sorry, the data should be a Buffer, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    date(error) {
      //#######################################
      //|
      //|   @params {*} error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !isDate(this._data)) {
        throw error != null ? error : `data.Schema.Checker.date >>> Sorry, the data should be a Date, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    array(error) {
      //#######################################
      //|
      //|   @params {*} error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !isArray(this._data)) {
        throw error != null ? error : `data.Schema.Checker.array >>> Sorry, the data should be an Array, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    plainObject(error) {
      //#######################################
      //|
      //|   @params {*} error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !isPlainObject(this._data)) {
        throw error != null ? error : `data.Schema.Checker.plainObject >>> Sorry, the data should be a plain-object, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    is(constructor, error) {
      //#######################################
      //|
      //|   @params {Class} constructor
      //|   @params {*}     error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !(this._data instanceof constructor)) {
        throw error != null ? error : `data.Schema.Checker.is >>> Sorry, the data should be a < ${constructor.name} >, current data is ${this._display(this._data)}.`;
      }
      return this;
    }

    in(enums, error) {
      //#######################################
      //|
      //|   @params {*[]} enums
      //|   @params {*}   error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if ((this._data != null) && !enums.includes(this._data)) {
        enums = enums.map((e) => {
          return this._display(e);
        });
        throw error != null ? error : `data.Schema.Checker.in >>> Sorry, the data should be in ${enums.join(', ')}, current is ${this._display(this._data)}.`;
      }
      return this;
    }

    min(min, error) {
      //#######################################
      //|
      //|   @params {number} min
      //|   @params {*}      error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if (this._data != null) {
        switch (false) {
          case !isNumber(this._data):
            this._min_number(min);
            break;
          case !isString(this._data):
            this._min_string(min);
            break;
          case !isBuffer(this._data):
            this._min_buffer(min);
        }
      }
      return this;
    }

    max(max, error) {
      //#######################################
      //|
      //|   @params {number} max
      //|   @params {*}      error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if (this._data != null) {
        switch (false) {
          case !isNumber(this._data):
            this._max_number(max);
            break;
          case !isString(this._data):
            this._max_string(max);
            break;
          case !isBuffer(this._data):
            this._max_buffer(max);
        }
      }
      return this;
    }

    _min_number(min) {
      if (this._data < min) {
        throw typeof error !== "undefined" && error !== null ? error : `data.Schema.Checker._min_number >>> Sorry, the number should be ≥ ${min}, current is ${this._data}.`;
      }
    }

    _max_number(max) {
      if (this._data > max) {
        throw typeof error !== "undefined" && error !== null ? error : `data.Schema.Checker._max_number >>> Sorry, the number should be ≤ ${max}, current is ${this._data}.`;
      }
    }

    _min_string(min) {
      if (this._data.length < min) {
        throw typeof error !== "undefined" && error !== null ? error : `data.Schema.Checker._min_string >>> Sorry, the string's length should be ≥ ${min}, current is ${this._data.length}.`;
      }
    }

    _max_string(max) {
      if (this._data.length > max) {
        throw typeof error !== "undefined" && error !== null ? error : `data.Schema.Checker._max_string >>> Sorry, the string's length should be ≤ ${max}, current is ${this._data.length}.`;
      }
    }

    _min_buffer(min) {
      if (this._data.length < min) {
        throw typeof error !== "undefined" && error !== null ? error : `data.Schema.Checker._min_buffer >>> Sorry, the buffer's length should be ≥ ${min}, current is ${this._data.length}.`;
      }
    }

    _max_buffer(max) {
      if (this._data.length > max) {
        throw typeof error !== "undefined" && error !== null ? error : `data.Schema.Checker._max_buffer >>> Sorry, the buffer's length should be ≤ ${max}, current is ${this._data.length}.`;
      }
    }

    mime(mimes, error) {
      //#######################################
      //|
      //|   @params {string[]} mimes
      //|   @params {*}        error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      if (this._data != null) {
        mime = mime(this._data);
        if (!mimes.includes(mime)) {
          mimes = mimes.map((m) => {
            return `'${m}'`;
          });
          throw error != null ? error : `data.Schema.Checker.mime >>> Sorry, the data's mime should be in ${mimes.join(', ')}, current is ${mime}.`;
        }
      }
      return this;
    }

    format(format, error) {
      var check;
      //#######################################
      //|
      //|   @params {string} format
      //|   @params {*}      error
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      check = this._formats[format];
      if (!check) {
        throw `data.Schema.Checker.format: The format { ${format} } hasn't registered yet.`;
      }
      if (this._data && check(this._data) !== true) {
        throw error != null ? error : `data.Schema.Checker.format >>> Sorry, the data's format should be { ${format} }, current data is ${this._display(this._data)}.`;
      }
      return this;
    }

    rule(rule) {
      var check, error;
      //#######################################
      //|
      //|   @params {string}  rule
      //|   @errors
      //|   @return {Checker} this
      //|
      //#######################################
      check = this._rules[rule];
      if (!check) {
        throw `data.Schema.Checker.rule: The rule { ${rule} } hasn't registered yet.`;
      }
      try {
        check(this._data);
        return this;
      } catch (error1) {
        error = error1;
        if (isString(error)) {
          error += ` <<< the rule { ${rule} }`;
        }
        throw error;
      }
    }

    _display(data) {
      switch (false) {
        //#######################################
        //|
        //|   Format the data for error's message.
        //|
        //|   @params {*} data
        //|   @return {string}
        //|
        //#######################################
        case !isBool(data):
          return "{ " + data + " }";
        case !isString(data):
          return "'" + data + "'";
        case !isArray(data):
          return "[ " + data.join(', ') + " ]";
        case !isPlainObject(data):
          return data;
        case !isObject(data):
          return "< " + data.constructor.name + " >";
        default:
          return data;
      }
    }

  };

}).call(this);