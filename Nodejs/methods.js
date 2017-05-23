//create methods object and assign three functions to the methods object.
var methods = {};

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
exports.data = methods;
exports.output = output;
