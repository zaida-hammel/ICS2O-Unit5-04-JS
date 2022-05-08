// Created by: Zaida Hammel
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-JS/sw.js", {
    scope: "/ICS2O-Unit5-04-JS/",
  });
}

/**
 * This function determines if you are eligible for student discount.
 */
function myButtonClicked() {
  const userAge = document.getElementById("userAge").value
  const dayWeek = document.getElementById("days").value 

  
  if ((dayWeek == "tuesday") || (dayWeek == "thursday") && (userAge > 12 && userAge < 21)) {
    document.getElementById("answers").innerHTML = "You have a student discount! Pay student pricing."
  } else {
    document.getElementById("answers").innerHTML = "You do not have a discount, pay regular pricing."
  }
}
