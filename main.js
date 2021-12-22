'use strict';

class First {
  hello() {
    console.log("Привет я метод родителя!");
  }
}

class Second extends First {
  hello() {
    super.hello();
    console.log("А я наследуемый метод!");
  }
}

const third = new Second();
console.log(third);
third.hello();