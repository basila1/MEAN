function construct_func() {
  var nameHolder;
  return {
    name: function(fname, lname) {
      nameHolder = fname + ' ' + lname;
    },

    consoleLog: function() {
      console.log(nameHolder);
    }

  }
}
//returning an onject

module.exports = construct_func;
