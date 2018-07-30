isURL    = require('validator/lib/isURL')
isString = require('../isString')


module.exports = ( value ) ->


   ########################################
   #|
   #|   @params {*}       value
   #|   @return {boolean} result
   #|
   ########################################


   return isString(value) and isURL(value)