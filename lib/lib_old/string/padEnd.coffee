module.exports = padEnd = ( value, len, char ) =>

   ########################################
   #|
   #|   Padding the char to value's end.
   #|
   #|   eg:
   #|      padStart(7, 3, '0') => '700'
   #|      padStart(7, 3, ' ') => '7  '
   #|
   #|   @params {*}      value - will convert to string
   #|   @params {number} len   - expected overall-length
   #|   @params {string} char  - the monocase used to padding
   #|
   #|   @return {string}
   #|
   ########################################

   string = value.toString()

   count = len - string.length

   while count > 0
      string = string + char
      count--

   return string