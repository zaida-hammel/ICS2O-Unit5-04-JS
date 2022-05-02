// Created by: Zaida Hammel
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML/",
  });
}

/**
 * This function determines if an integer is negative or positive.
 */
function myButtonClicked() {
  var dayWeek = document.getElementById("days").value
  var userAge = parseInt(document.getElementById("userAge").value)
  const tuesday = document.getElementById("tuesday").value
  const thursday = document.getElementById("thursday").value
  if ((dayWeek == tuesday) || (dayWeek == thursday) || (userAge > 12 && userAge < 21)) {
    document.getElementById("answers").innerHTML = "You have a student discount."
  } else {
    document.getElementById("answers").innerHTML = "You do not have a discount, pay regular pricing."
  }
}
