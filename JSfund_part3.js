function ninjaConstructor(param1, param2) {
  this.name = param1;
  this.cohort = param2;
  this.beltLevel = 0;
  this.levelUp = function () {
    console.log("Level Up!!!!");
    this.beltLevel += 1;
    return this;
  }
}
