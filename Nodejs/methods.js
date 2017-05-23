//create methods object and assign three functions to the methods object.
var methods = module.exports = {};

// a = { prop1: true };
// b = a; -> referencing a not making a new copy
// b.prop1 = false; -> overring what a is initially set to
//console.log(a.prop1) -> false

var output;

methods.updateServer = function() {
  console.log('Important function');
};

methods.eatCookies = function () {
  console.log('chocolate cookies');
};

methods.node = function() {
  console.log('NodeJS is awesome');
};

methods.sumNumbers = function(a, b) {
  output = a + b
  return output;
}

methods.circleCircumference = function(radius) {
  output =  2 * Math.PI * radius;
  return output;
}

methods.areaOfRectange = function(a, b) {
  output = a * b;
  return output;
}

//data contains all these methods, and exporting them to another file.
module.exports.data = methods;
exports.output = output;
