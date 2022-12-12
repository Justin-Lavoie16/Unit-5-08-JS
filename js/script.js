/* Created by: Justin Lavoie *
 Created on: nov 2022 * 
*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-08-JS/sw.js", {
    scope: "/Unit-5-08-JS/",
  })
}

"use strict"

function calculate() {
  const number1 = parseInt(document.getElementById("pay").value);
  const number2 = parseInt(document.getElementById("pay2").value);
  var age = 0;
  var answer = number1;
  
  if (number1 > 0 && number2 > 0) {
    while (answer >= number2) {
      age = age + 1;
      answer = answer - number2;
    }
  }

  document.getElementById("answers").innerHTML =
    number1 +  " ÷ " + number2 + " = " + age;
}