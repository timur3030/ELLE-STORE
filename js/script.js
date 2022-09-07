"use strict";

const inputLira = document.querySelector("#lira"),
  inputRub = document.querySelector("#rub");

inputLira.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputRub.value = (+inputLira.value * data.current.rub).toFixed(2);
    } else {
      inputRub.value = "Что-то пошло не так";
    }
  });
});
