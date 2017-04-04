//Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

for (var i = 0; i < x.length; i++) {
  console.log(x[i])
}

//Add a new value (100) in the array x using a push method.
x.push(100)
console.log(x); //prints out the first array with 100

//Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
x.push(["hello", "world", "JavaScript is Fun"])
console.log(x); //prints out the second array

//Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.


  var sum = 0
  for (var i = 0; i < 501; i++) {
    sum += i
  }
  console.log(sum);

  //Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it

var array = [1, 5, 90, 25, -3, 0];
var min = array[0];

for (var i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log(min);

//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it

var arr2 = [1, 5, 90, 25, -3, 0]
var sum = 0
for (var i = 0; i < arr2.length; i++) {
  sum += arr2[i]
}
console.log(sum/arr2.length);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja) {
  if (newNinja.hasOwnProperty(key)) {
    console.log(key);
    console.log(newNinja[key]);
  }
}

for (var key in newNinja) {
    console.log(`Key-value pair - ${key}: ${newNinja[key]}`);
}
