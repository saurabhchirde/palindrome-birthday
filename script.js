const inputText = document.querySelector(".birthDate");
const btnCheck = document.querySelector(".btnCheck");

const output = document.querySelector(".output");

function reverseStr(str) {
  const reversed = str.split("").reverse().join("");
  return reversed;
}

function checkPalindrome(str) {
  const reverseText = reverseStr(str);
  return str === reverseText;
}

function dateToString(date) {
  var dateStr = { day: "", month: "", year: "" };
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();
  return dateStr;
}

function dateVariations(date) {
  var dateStr = dateToString(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function isPalindromeAllDateVariations(date) {
  const dateArray = dateVariations(date);
  var flag = false;
  for (let i = 0; i < dateArray.length; i++) {
    if (checkPalindrome(dateArray[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

//leap year function
function leapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

//next date
function nextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (leapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else {
    if (day > monthDays[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

//check next palindrome
function nextDatePalindrome(date) {
  var cnt = 0;
  var nxtDate = nextDate(date);
  while (1) {
    cnt++;
    var isPalindrome = isPalindromeAllDateVariations(nxtDate);
    if (isPalindrome) {
      break;
    }
    nxtDate = nextDate(nxtDate);
  }
  return [cnt, nxtDate];
}

function clickHandler() {
  var input = inputText.value;
  if (input !== "") {
    var listDate = input.split("-");
    var date = {
      day: Number(listDate[2]),
      month: Number(listDate[1]),
      year: Number(listDate[0]),
    };
    var isPalindrome = isPalindromeAllDateVariations(date);
    if (isPalindrome) {
      output.innerText = "Your birthday is Palindrome ! ☻ ";
    } else {
      var [ctr, nxtPalin] = nextDatePalindrome(date);
      output.innerText = `The next palindrome date is "${nxtPalin.day}-${nxtPalin.month}-${nxtPalin.year}" ,\n you missed it by ${ctr} days :( `;
    }
  } else {
    output.innerText = "Enter valid date ";
  }
}

btnCheck.addEventListener("click", clickHandler);
