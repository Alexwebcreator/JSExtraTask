'use strict';
var lang = 'en';
if (lang == 'ru') {
  console.log(['Пн','Вт','Сp','Чт','Пт','Сб','Вс']);
} else if (lang == 'en') {
  console.log(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
}

switch (lang) {
  case 'ru':
    console.log(['Пн','Вт','Сp','Чт','Пт','Сб','Вс']);
    break;
  case 'en':
    console.log(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    break;
}

var langArray = [];
langArray['ru'] = ['Пн','Вт','Сp','Чт','Пт','Сб','Вс'];
langArray['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(langArray[lang]);

const namePerson = prompt('Введите Имя');

namePerson === 'Артем' ? console.log("директор") : namePerson === 'Александр' ? console.log("преподователь") : console.log("студент");

