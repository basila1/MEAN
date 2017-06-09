process.nextTick(function nextTick1() {
  var a = 0;
  while (true) {
    a++;
  }
});

process.nextTick(function nextTick2() {
  console.log("next tick!!!");
});

setTimeout(function timeout() {
  console.log("Timeout!!!");
}, 1000);

//In this case, the nextTick2 and timeout functions will never have the chance to run no matter how long you wait because the event loop is blocked by an in nite cycle inside the  rst nextTick function. Even the scheduled timeout function that was supposed to run after one second does not run.
