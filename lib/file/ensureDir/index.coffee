fs       = require('fs-extra-promise')
errors   = require('../../errors')
error    = require('../../core/error')
isString = require('../../is/isString')
isFile   = require('../isFile')


module.exports = ( path ) ->


   ########################################
   #|
   #|   @params {string} path
   #|
   ########################################


   if !isString( path )
      throw error({ name: errors.INVALID_PARAMS, message: "`path` should be a string" })


   if await isFile( path )
      throw error({ name: errors.INVALID_PARAMS, message: "`#{path}` is already a file" })


   await fs.ensureDirAsync( path )