require('coffeescript/register')
_ = require('lodash')



module.exports = sai = require('./lib')



;(async function(){

   try {

      schema = new sai.Schema
      tester = new sai.Tester({name: null}, 'name')
      tester.name('测试用户名')
      tester.schema(schema)

      tester.required()

   } catch (error) {
      console.log(error.name)
      console.log(error.message)
   }

})()





