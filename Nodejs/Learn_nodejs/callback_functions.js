// in this scenarior user 2 and user 3 get blocked till user 1's data is delivered.
// console.log("user 1 made a request");
// console.log("database operation takes 5 seconds");
// console.log("data delivered to the user");

// console.log("user 2 made a request");
// console.log("database operation takes 5 seconds");
// console.log("data delivered to the user");

// console.log("user 3 made a request");
// console.log("database operation takes 5 seconds");
// console.log("data delivered to the user");

//callback --> delaying databse execution by 5 seconds. telling it continue the execution of next line of code. when the data is ready, callback this function. callback function is a function thats passed as an argument in another function and is invoked after some kind of an event --> in this case 5 seconds. 
console.log("user 1 made a request");
setTimeout(callback, 5000);

console.log("user 2 made a request");
setTimeout(callback, 5000);

console.log("user 3 made a request");
setTimeout(callback, 5000);

function callback() {
  console.log("Queried the databse and delivered data in 5 seconds");
}
