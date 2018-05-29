// Generated by CoffeeScript 2.2.2
(function() {
  var count;

  module.exports = count = (items, callback) => {
    var i, item, len;
    //#######################################
    //|
    //|   @params {*[]}      items
    //|   @params {function} callback(item)
    //|
    //|   @return {number}   count
    //|
    //#######################################
    count = 0;
    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      if (callback(item)) {
        count++;
      }
    }
    return count;
  };

}).call(this);