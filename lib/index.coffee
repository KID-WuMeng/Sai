module.exports =


   # ~core
   type:     require('./core/type')
   get:      require('./core/get')
   switch:   require('./core/switch')
   Switcher: require('./core/Switcher')
   error:    require('./core/error')
   sleep:    require('./core/sleep')
   noop:     require('./core/noop')


   # ~is
   is:              require('./is/is')
   isBoolean:       require('./is/isBoolean')
   isNumber:        require('./is/isNumber')
   isInt:           require('./is/isInt')
   isN:             require('./is/isN')
   isID:            require('./is/isID')
   isString:        require('./is/isString')
   isSymbol:        require('./is/isSymbol')
   isFunction:      require('./is/isFunction')
   isAsyncFunction: require('./is/isAsyncFunction')
   isArray:         require('./is/isArray')
   isArrayLike:     require('./is/isArrayLike')
   isBuffer:        require('./is/isBuffer')
   isRegExp:        require('./is/isRegExp')
   isDate:          require('./is/isDate')
   isError:         require('./is/isError')
   isPromise:       require('./is/isPromise')
   isObject:        require('./is/isObject')
   isPlainObject:   require('./is/isPlainObject')
   isNil:           require('./is/isNil')
   isNaN:           require('./is/isNaN')
   isAny:           require('./is/isAny')
   isEqual:         require('./is/isEqual')