'use strict';

const timer = () => {
  const dayTime = document.getElementById('day-time');
  const weekDay = document.getElementById('week-day');
  const currentTime = document.getElementById('current-time');
  const newYear = document.getElementById('new-year');

  let date = new Date();

  const getDayTime = () => {
    let timeOfDay = '';
    let whichTime = date.getHours();
    console.log(whichTime);
    switch (true) {
      case whichTime < 6:
        timeOfDay = 'Доброй ночи!';
        break;
      case whichTime < 11:
        timeOfDay = 'Доброе утро!';
        break;
      case whichTime < 19:
        timeOfDay = 'Добрый день!';
        break;
      case whichTime <= 23:
        timeOfDay = 'Добрый вечер!';
        break;
    }
    dayTime.textContent = timeOfDay;
  };
  const getWeekDay = () => {
    let dayOfWeek = '';
    let dayNumber = date.getDay();
    console.log(dayNumber);
    switch (dayNumber) {
      case 0:
        dayOfWeek = 'Воскресенье';
        break;
      case 1:
        dayOfWeek = 'Понедельник';
        break;
      case 2:
        dayOfWeek = 'Вторник';
        break;
      case 3:
        dayOfWeek = 'Среда';
        break;
      case 4:
        dayOfWeek = 'Четверг';
        break;
      case 5:
        dayOfWeek = 'Пятница';
        break;
      case 6:
        dayOfWeek = 'Суббота';
        break;
    }
    weekDay.textContent = `Сегодня: ${dayOfWeek}`;
  };
  const getCurrentTime = () => {
    let timeNow = '';
    let hoursNow = date.getHours();
    let minutesNow = date.getMinutes();
    let secondsNow = date.getSeconds();
    if (hoursNow < 12) {
      timeNow = 'AM';
    } else {
      timeNow = 'PM';
    }

    currentTime.textContent = `Текущее время: ${hoursNow} : ${minutesNow} : ${secondsNow} ${timeNow}`;

    if (hoursNow > 0) {
      setTimeout(getCurrentTime, 1000);
    }

  };

  const getNewYear = (year) => {
    let nextDate = new Date(`December 31, ${year}`)
    let msPerDay = 24*60*60*1000;
    let daysLeft = Math.round((nextDate.getTime() - date.getTime())/msPerDay);
    let dayname = "";
    let ds = ""+daysLeft;
    let dd=parseInt(ds.substr(ds.length-1));
    if(daysLeft>4&&daysLeft<21)dayname=" дней";
    else
    if(dd==1)dayname=" день";
    else
    if(dd==2||dd==3||dd==4)dayname=" дня";
    else dayname=" дней";
    if(daysLeft<0) {
      newYear.textContent = "Завтра новый год!";
    } else {
      newYear.textContent = "До нового года осталось "+daysLeft+dayname+"!";}
     
  };

  getDayTime();
  getWeekDay();
  getCurrentTime();
  getNewYear(2021);
  
};

timer();