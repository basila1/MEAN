function VehicleConstructor(name, wheels, passengers, speed) {
  //private variables
  var self = this;
  var distance_traveled = 0;
  var updateDistanceTravelled += self.speed;

}

this.name = name;
this.wheels = wheels;
this.passengers = passengers;
this.speed = speed;

this.makeNoise = function () {
  console.log("VRRROOOOMMMMM");
}

this.move = function () {
  updateDistanceTravelled();
  this.makeNoise();
  return this;
}

this.checkMiles = function () {
  console.log(`miles travelled: ${distance_traveled}`);
  return this;
}
