module.exports = ->

   ########################################
   #|
   #|   @return {int ≥ 0} weeks
   #|
   ########################################

   return parseInt(@seconds(true) % 60)