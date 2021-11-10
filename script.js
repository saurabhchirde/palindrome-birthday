const inputText = document.querySelector(".stringCheck");
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

var date = {
  day: 2,
  month: 02,
  year: 2020,
};

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

function isPalindromeAllDateVariations() {
  const dateArray = dateVariations(date);
  for (let i = 0; i < dateArray.length; i++) {
    if (checkPalindrome(dateArray[i])) {
      return true;
      break;
    }
    return false;
  }
}

console.log(isPalindromeAllDateVariations(date));
