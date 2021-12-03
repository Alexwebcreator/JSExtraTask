'use strict';

let arr = ["66161", "4868486", "895652", "2546884", "965151", "363984", "265489"];
arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

let n = 100; 
 
for (let i = 2; i <= n; i++) { 
    let isPrime = true;
    for (let j = 2; j < i; j++) { 
        if (i % j === 0) { isPrime = false; break; } 
    }
    if (isPrime) console.log(i + " делители этого числа 1 и " + i); 
}