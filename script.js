const inputText = document.querySelector(".stringCheck");
const btnCheck = document.querySelector(".btnCheck");

const output = document.querySelector(".output");

btnCheck.addEventListener("click", () => {
  const normalText = inputText.value;
  const charList = normalText.split("");
  console.log("Char list : " + charList);
  const reverseList = charList.reverse();
  console.log("Normal text :" + normalText, "Reverselist : " + reverseList);
  const reverseText = reverseList.join("");
  console.log("Reverse text : " + reverseText);
  output.innerText = "Reverse text : " + reverseText;
});
