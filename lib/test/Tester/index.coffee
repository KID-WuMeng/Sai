get = require('../../core/get')


module.exports = class Tester

   constructor: ( data, path = '' ) ->

      ########################################
      #|
      #|   @params {*}      data
      #|   @params {string} [path]
      #|
      #|   @return {sai.Tester} @
      #|
      ########################################

      @_data   = if path then get(data, path) else data
      @_path   = path
      @_name   = ''
      @_schema = null

      @name        = require('./@name')
      @schema      = require('./@schema')
      @required    = require('./@required')
      @in          = require('./@in')
      @is          = require('./@is')
      @boolean     = require('./@boolean')
      @number      = require('./@number')
      @string      = require('./@string')
      @buffer      = require('./@buffer')
      @date        = require('./@date')
      @array       = require('./@array')
      @plainObject = require('./@plainObject')
      @min         = require('./@min')
      @max         = require('./@max')
      @check       = require('./@check')
      @format      = require('./@format')