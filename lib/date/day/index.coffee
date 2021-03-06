errors = require('../../errors')
error  = require('../../core/error')
isDate = require('../../is/isDate')


module.exports = ( date ) ->

   ########################################
   #|
   #|   @params {Date}   date
   #|   @return {number} day ( 1 - 28/29/30/31 )
   #|
   ########################################

   if !isDate(date)
      throw error({ name: errors.INVALID_PARAMS, message: "`date` should be a Date" })

   return date.getDate()