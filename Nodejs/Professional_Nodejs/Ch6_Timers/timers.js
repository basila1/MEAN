

//setTimeout accepts the deferred function as a  rst argument and the time after which the function is executed — in milliseconds — as the second argument.
var timeout_ms = 2000;
var timeout = setTimeout(function () {
  console.log("timed out!!");
}, timeout_ms);


//Inthiscasethetimeoutwillneverbe redand"timed out!"willneverbeprintedtotheconsole.
var timeoutTime = 1000; // one second
var timeout = setTimeout(function() {
  console.log("timed out!");
}, timeoutTime);
clearTimeout(timeout);

// outputs "tick" to the console every second
var period = 1000;
setInterval(function () {
  console.log('tick');
}, period);
