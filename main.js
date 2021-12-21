'use strict';

const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
  this.render = function () {
    let elem;
    let elementName = prompt("Назови элемент, начни ввод с . или # ");
    let dot = elementName[0] == "." ? elementName.substr(1) : elementName;
    let sharp = elementName[0] == "#" ? elementName.substr(1) : elementName;
    switch (true) {
      case elementName[0] == ".":
        const div = document.createElement("div");
        div.classList.add(dot);
        elem = div;
        break;
      case elementName[0] == "#":
        const p = document.createElement("p");
        p.id = sharp;
        elem = p;
        break;
      default:
        console.log("Ошибка");
    }
    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    do {
      this.height = prompt("Высота элемента");
    } while (!isNumber(this.height));
    do {
      this.width = prompt("Ширина элемента");
    } while (!isNumber(this.width));
    let elemBg = prompt("Цвет фона на английском или #Hex color)");
    do {
      this.fontSize = prompt("Размер текста");
    } while (!isNumber(this.fontSize));
    let elemText = prompt("Внутренний текст элемента");
    
    if (elem) {
      elem.style.cssText =
        "height:" +
        this.height +
        "px; " +
        "width:" +
        this.width +
        "px; " +
        "background:" +
        elemBg +
        ";" +
        "font-size:" +
        this.fontSize + "px; ";
      elem.textContent = elemText;
      document.body.append(elem);
    } else {
      alert("Начните ввод с (.) или (#)");
    }
  };



};


const obj = new DomElement();
obj.render();
