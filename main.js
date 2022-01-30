'use strict';

const one = (arg) => {
  if (typeof arg != 'string') {
    alert("Не строка");
  } else if (arg.length > 30) {
    alert(arg.trim().substr(0, 30) + "...");
  }
  alert(arg.trim());
};

one("   Hello, I'm glad to see you so soon   ");