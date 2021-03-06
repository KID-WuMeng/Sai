module.exports = date = ( year, month = 1, day = 1, hour = 0, minute = 0, second = 0, ms = 0 ) =>

   ########################################
   #|
   #|   @params {number} year
   #|   @params {number} [month]  = 1 (from 1 to 12)
   #|   @params {number} [day]    = 1
   #|   @params {number} [hour]   = 0
   #|   @params {number} [minute] = 0
   #|   @params {number} [second] = 0
   #|   @params {number} [ms]     = 0
   #|
   #|   @return {Date}
   #|
   ########################################

   return new Date( year, month - 1, day, hour, minute, second, ms )