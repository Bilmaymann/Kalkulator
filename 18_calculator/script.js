let buttons = document.querySelectorAll(".btn");
const btnNumber = document.querySelectorAll(".btn-num");
const btnAmal = document.querySelectorAll(".btn-amal");
const tengTugma = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");
const btnRemove = document.querySelector(".btn-remove");
let textArea = document.querySelector(".input");
textArea.value = "";

buttons.forEach((item, i) => {
  item.addEventListener("mousedown", () => {
    item.style.border = "inset";
  });
  item.addEventListener("mouseup", () => {
    item.style.border = "outset";
  });
});

function deg(a, b) {
  if (b == 0) {
    return 1;
  }
  if (b % 2 == 0) {
    var res = deg(a, b / 2);
    return res * res;
  } else {
    return a * deg(a, b - 1);
  }
}

function amalBajar(num1, num2, amal) {
  if (amal == "/") {
    return num1 / num2;
  } else if (amal == "*") {
    return num1 * num2;
  } else if (amal == "-") {
    return num1 - num2;
  } else if (amal == "+") {
    return num1 + num2;
  } else {
    return deg(num1, num2);
  }
}

let num1 = "",
  num2 = "",
  amal = "";

btnClear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  amal = "";
  textArea.value = "";
});

btnNumber.forEach((item) => {
  item.addEventListener("click", () => {
    if (amal == "") {
      if (
        textArea.value == "" &&
        (item.textContent == "0" || item.textContent == "00")
      ) {
        num1 = "";
        textArea.value = "";
      } else {
        num1 = textArea.value;
        num1 = num1 + item.textContent;
        textArea.value = num1;
      }
    } else {
      if (textArea.value == "" && item.textContent == "0") {
        num2 = "";
        textArea.value = "";
      } else {
        num2 = textArea.value;
        num2 = num2 + item.textContent;
        textArea.value = num2;
      }
    }
  });
});

btnAmal.forEach((item) => {
  item.addEventListener("click", () => {
    if (num1 == "") {
      alert("Iltimos birinchi sonni kiriting");
    } else {
      amal = item.textContent;
      textArea.value = "";
    }
  });
});

btnRemove.addEventListener("click", () => {
  var str = textArea.value;
  var res = str.substring(0, str.length - 1);
  textArea.value = res;
});

tengTugma.addEventListener("click", () => {
  if (num1 != "" && num2 != "") {
    let nuM1 = Number(num1),
      nuM2 = Number(num2);
    let answer = amalBajar(nuM1, nuM2, amal);
    textArea.value = answer;
    num1 = "";
    num2 = "";
    amal = "";
  } else {
    alert("2-son hali kiritilmagan");
  }
});
