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
    let elementName = this.selector;
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
    //function isNumber(n) {
      //return !isNaN(parseFloat(n)) && //isFinite(n);
    //}
    //do {
      //this.height = prompt("Высота элемента");
    //} while (!isNumber(this.height));
    //do {
      //this.width = prompt("Ширина элемента");
    //} while (!isNumber(this.width));
    //let elemBg = prompt("Цвет фона на английском или #Hex color)");
    //do {
      //this.fontSize = prompt("Размер текста");
    //} while (!isNumber(this.fontSize));
    //let elemText = prompt("Внутренний текст элемента");
    
    if (elem) {
      elem.style.cssText =
        "height:" +
        this.height +
        "px; " +
        "width:" +
        this.width +
        "px; " +
        "background:" +
        this.bg +
        ";" +
        "font-size:" +
        this.fontSize + "px; ";
      elem.textContent = this.text;
      document.body.append(elem);
    } else {
      alert("Начните ввод с (.) или (#)");
    }
  };



};

//Обязательное задание
//const obj = new DomElement();
//obj.render();


const square = new DomElement(".square", "100", "100", "green");
let squareHTML;
let x = 0;
let y = 0;

const keyMove = (event) => {
  switch (true) {
    case event.code == "ArrowDown":
      y += 10;
      break;
    case event.code == "ArrowUp":
      if (y >= 10) {
        y -= 10;
      }
      break;
    case event.code == "ArrowRight":
      const clientWidth = document.documentElement.clientWidth;
      if(x < clientWidth - 120) {
        x += 10;
      }
      break;
    case event.code == "ArrowLeft":
      if (x >= 10) {
        x -= 10;
      }
      break;
  }

  squareHTML.style.transform = "translate(" + x + "px, " + y + "px)";

};

document.addEventListener("DOMContentLoaded", square.render());

squareHTML = document.querySelector(".square");

square.position = "absolute";
squareHTML.style.position = square.position;

document.addEventListener("keydown", keyMove);