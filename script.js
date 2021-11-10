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

console.log(checkPalindrome("saurabh"));
console.log(checkPalindrome("oppo"));
console.log(checkPalindrome("racecar"));
