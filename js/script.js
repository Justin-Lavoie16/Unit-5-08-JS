/* Created by: Justin Lavoie *
 Created on: nov 2022 * 
*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-08-JS/sw.js", {
    scope: "/Unit-5-08-JS/",
  })
}

;("use strict")

function calculate() {
  const firstnumber = parseInt(document.getElementById("pay").value)
  const secondnumber = parseInt(document.getElementById("pay2").value)
  var addedNumber = 0
  var answer = firstnumber
  var remaining = 0

  if (firstnumber > 0 && secondnumber > 0) {
    while (answer >= secondnumber) {
      addedNumber = addedNumber + 1
      answer = answer - secondnumber
    }
  }

  if (answer == 0) {
    remaining = 0
  } else if (answer != 0) {
    remaining = answer + secondnumber
  }

  document.getElementById("answers").innerHTML =
    firstnumber +
    " ÷ " +
    secondnumber +
    " = " +
    addedNumber +
    " And the remainder answer is " +
    remaining
}
