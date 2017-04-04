function VehicleConstructor(name, wheels, passengers) {
  var vehicle = {};
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle. passengers = passengers;

//makeNoise method
  vehicle.makeNoise = function () {
    console.log("VRRROOOOMMMMM");
  }

  return vehicle;
}

//create a bike

var bike = VehicleConstructor("bike", 2, 1);
//redefine the bike's makeNoise method
bike.makeNoise = function () {
  console.log("ring ring");
  return bike
}

bike.makeNoise();

//create a sedan

var sedan = VehicleConstructor("sedan", 4, 4);
//redefine the sedan's makeNoise method
sedan.makeNoise = function () {
  console.log("Honk Honk");
  return sedan
}

sedan.makeNoise();

var bus = VehicleConstructor("bus", 4, 1);
bus.pickUp = function () {
  bus.passengers++;
  console.log(`This bus has ${bus.passengers} passengers on board`);
  return bus;
}
bus.pickUp().pickUp()
