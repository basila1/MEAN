var summing1 = function sumAll(x, y) {
  var sum = 0;
  for (var i = x; i < y; i++) {
    sum += i;
  }
  return sum
}

// console.log(sumAll(2,4));
console.log(summing1);

var minimum1 = function minValue(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];

    }
  }
  return min;
}

// console.log(minValue([2,3,4,6,8]));
console.log(minimum1);

var average1 = function avgValue(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length
}

// console.log(avgValue([2,2,2,2]));
console.log(average1);

function objectExample() {
  this.summing = function summing(x, y) {
    var sum = 0
    for (var num = x; num <= y; num++) {
      sum += num;
  }
  console.log(sum);
  return this
}
  this.minimum1 = function minValue(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
        }
  console.log(min);
  return this;
    }
  this.avg = function avg(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
  console.log(total/arr.length);
  return this;
    };
}

var test = new objectExample();
test.summing(4, 6)

function person(myName) {
  this.name = myName;
  this.distance_traveled = 0
  this.say_name = function () {
    console.log(this.name);
    return this;
  }
  this.say_something = function(param1) {
    console.log(`${this.name} says '${param1}'`);
    return this;
  }
  this.walk = function () {
    console.log(`${this.name} is walking`);
    this.distance_traveled += 3;
    return this;

  }
  this.run = function () {
    console.log(`${this.name} is running`);
    this.distance_traveled += 10;
    return this;
  }
  this.crawl = function () {
    console.log(`${this.name} is crawling`);
    this.distance_traveled += 1;
    return this;

  }
}

var test1 = new person("Basila")
test1.say_name();
test1.say_something("I am cool");
test1.walk();
test1.run();
test1.crawl();
test1.say_something(`I traveled ${test1.distance_traveled} miles`);
