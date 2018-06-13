// Generated by CoffeeScript 2.3.1
(function() {
  var Client, ObservableObject, axios,
    boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

  axios = require('axios');

  ObservableObject = require('../util/ObservableObject');

  module.exports = Client = class Client extends ObservableObject {
    constructor(opt = {}) {
      var defaults;
      super();
      this.url = this.url.bind(this);
      //#######################################
      //|
      //|   @params {string}  path
      //|   @params {object}  data
      //|   @params {object}  opt
      //|
      //|   @return {Promise} axios-promise
      //|
      //#######################################
      this.get = this.get.bind(this);
      this.post = this.post.bind(this);
      this.put = this.put.bind(this);
      this.patch = this.patch.bind(this);
      this.delete = this.delete.bind(this);
      this._call = this._call.bind(this);
      this._readyOptions = this._readyOptions.bind(this);
      this._adaptOptions = this._adaptOptions.bind(this);
      defaults = {
        urlBase: ''
      };
      this.opt = Object.assign(defaults, opt);
    }

    url(path) {
      boundMethodCheck(this, Client);
      //#######################################
      //|
      //|   @params {string} path
      //|   @return {string} url
      //|
      //#######################################
      return this.opt.urlBase + path;
    }

    get(path, data, opt) {
      boundMethodCheck(this, Client);
      return this._call('get', path, data, opt);
    }

    post(path, data, opt) {
      boundMethodCheck(this, Client);
      return this._call('post', path, data, opt);
    }

    put(path, data, opt) {
      boundMethodCheck(this, Client);
      return this._call('put', path, data, opt);
    }

    patch(path, data, opt) {
      boundMethodCheck(this, Client);
      return this._call('patch', path, data, opt);
    }

    delete(path, data, opt) {
      boundMethodCheck(this, Client);
      return this._call('delete', path, data, opt);
    }

    _call(method, path = '', data = {}, opt = {}) {
      boundMethodCheck(this, Client);
      //#######################################
      //|
      //|   Send the request.
      //|
      //|   @params {string} method
      //|   @params {string} path
      //|   @params {object} data
      //|   @params {object} opt
      //|
      //|   @events {'before-send'}(opt)
      //|
      //|   @return {Promise} axios-promise
      //|
      //#######################################
      this._readyOptions(opt, method, path, data);
      this._emit('before-send', opt);
      this._adaptOptions(opt);
      return axios(opt);
    }

    _readyOptions(opt, method, path, data) {
      var url;
      boundMethodCheck(this, Client);
      //#######################################
      //|
      //|   Ready the opt for call axios(opt).
      //|
      //|   @params {object} opt
      //|   @params {string} method
      //|   @params {string} path
      //|   @params {object} data
      //|
      //#######################################
      url = this.url(path);
      Object.assign(opt, {method, url, data});
    }

    _adaptOptions(opt) {
      boundMethodCheck(this, Client);
      //#######################################
      //|
      //|   Set opt.data to opt.params when GET.
      //|
      //|   @params {object} opt
      //|
      //#######################################
      if (opt.method === 'get') {
        opt.params = opt.data;
        delete opt.data;
      }
    }

  };

}).call(this);
