let form = document.querySelector("form");
let inputDay = document.getElementById("day");
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");
let yearsResult = document.querySelector(".years__result");
let monthsResult = document.querySelector(".months__result");
let daysResult = document.querySelector(".days__result");

inputDay.addEventListener("keydown", (e) => controlUserInput(inputDay, 1, e));
inputMonth.addEventListener("keydown", (e) =>
  controlUserInput(inputMonth, 1, e)
);
inputYear.addEventListener("keydown", (e) => controlUserInput(inputYear, 3, e));

inputDay.addEventListener("focus", () => cleanInput(inputDay));
inputMonth.addEventListener("focus", () => cleanInput(inputMonth));
inputYear.addEventListener("focus", () => cleanInput(inputYear));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateAge(inputDay.value, inputMonth.value, inputYear.value);
});

function calculateAge(day, month, year) {
  let currentDate = new Date();
  let isDayValid = validateDay(day);
  let isMonthValid = validateMonth(month);
  let isYearValid = validateYear(year, currentDate.getFullYear());

  if (isDayValid && isMonthValid && isYearValid) {
    let userDate = new Date(year, month - 1, day);

    if (validateDate(userDate, currentDate, day)) {
      let years = currentDate.getFullYear() - userDate.getFullYear();
      let months = currentDate.getMonth() - userDate.getMonth();
      if (months < 0) {
        months += 12;
        years--;
      }
      let days = currentDate.getDate() - userDate.getDate();
      if (days < 0) {
        days += 31;
        months--;
      }

      showResult(years, yearsResult);
      showResult(months, monthsResult);
      showResult(days, daysResult);
    } else {
      daysResult.textContent = "--";
      monthsResult.textContent = "--";
      yearsResult.textContent = "--";
    }
  }
}

function validateDate(userDate, currentDate, day) {
  if (
    userDate.getDate() != day ||
    (userDate.getFullYear() == currentDate.getFullYear() &&
      userDate.getMonth() > currentDate.getMonth()) ||
    (userDate.getMonth() == currentDate.getMonth() &&
      userDate.getDate() > currentDate.getDate())
  ) {
    addErrorMessageClass(inputDay, "invalidDate-msg");
    return false;
  }

  return true;
}

function validateDay(day) {
  if (isInputEmpty(day)) {
    addErrorMessageClass(inputDay, "required-msg");
    return false;
  }

  if (day > 31 || day < 1) {
    addErrorMessageClass(inputDay, "invalidDay-msg");
    return false;
  }

  return true;
}

function validateMonth(month) {
  if (isInputEmpty(month)) {
    addErrorMessageClass(inputMonth, "required-msg");
    return false;
  }

  if (month > 12 || month < 1) {
    addErrorMessageClass(inputMonth, "invalidMonth-msg");
    return false;
  }

  return true;
}

function validateYear(year, currentYear) {
  if (isInputEmpty(year)) {
    addErrorMessageClass(inputYear, "required-msg");
    return false;
  }

  if (year > currentYear) {
    addErrorMessageClass(inputYear, "invalidYear-msg");
    return false;
  }

  return true;
}

function isInputEmpty(input) {
  return input.length == 0;
}

//decorates the input with a error-like style
function addErrorMessageClass(input, message) {
  input.nextElementSibling.classList.add(message);
  input.previousElementSibling.classList.add("redLabel");
  input.classList.add("redOutline");
}

//prevents the user from typing more digits than the length of the format (day,month,year)
function controlUserInput(input, len, e) {
  if (
    (!isNumber(e.key) || input.value.length > len) &&
    e.key != "Backspace" &&
    e.key != "Tab"
  ) {
    e.preventDefault();
  }
}

//prevents the user from typing anything different to numbers
function isNumber(key) {
  return !Number.isNaN(+key);
}

//cleans input in case it has error-like decoration
function cleanInput(input) {
  input.classList.remove("redOutline");
  input.previousElementSibling.classList.remove("redLabel");
  input.nextElementSibling.className = "error-msg";
}

//show user age (years, months, days) with some animation
function showResult(age, element) {
  let i = 0;
  let timer = setInterval(() => {
    element.textContent = i;
    i++;
    if (i > age) {
      clearInterval(timer);
    }
  }, 50);
}
