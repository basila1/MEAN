function VehicleConstructor(name, wheels, passengers, speed) {
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_traveled = 0;
  this.VIN = null;
}

VehicleConstructor.prototype.makeNoise = function () {
  console.log("VRRRROOOOOMMMM");
};

VehicleConstructor.prototype.move = function () {
  this.makeNoise;
  this.updateDistanceTravelled;
  return this;
};

VehicleConstructor.prototype.checkMiles = function () {
  console.log(`Miles travelled by ${this.name}: ${this.distance_traveled}`);
  return this;
};

VehicleConstructor.prototype.updateDistanceTravelled = function () {
  this.distance_traveled += this.speed;
  return this;
};

VehicleConstructor.prototype.generateVIN = function () {
  var VINstr = " "
  for (var i = 0; i < 8; i++) {
    VINstr += Math.floor(Math.random() * 10);
  }
  this.VIN = VINstr;
  console.log(VINstr);
  return this;
};
