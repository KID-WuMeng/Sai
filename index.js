require('coffeescript/register')
lodash = require('lodash')


module.exports = sai = require('./lib')



// switcher = new sai.Switcher(['a', 1, true])
//
// console.log(switcher._result)
// console.log(switcher.result())





;(async function(){


})()


switcher = new sai.Switcher(['a', 'b', 'c'])


switcher.case(String, 'b', 'c')


console.log(switcher.result());