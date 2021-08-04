"use strict";

const bill = document.querySelector("#tbill");
const tip = document.querySelector("#tipbill");
const totalBillBtn = document.querySelector(".totalbill");
const textFinalBill = document.querySelector(".showbill");
const tipCal = false;
const resetBtn = document.querySelector("#reset-btn");
const peopleCount = document.querySelector("#numofpeople");

totalBillBtn.addEventListener("click", function (e) {
  const billValue = +bill.value;
  const roundedValue = roundToTwo(billValue);
  const tipValue = +tip.value;
  const numPeople = +peopleCount.value;
  const tipValuePer = tipValue / 100;
  const finalTipBill = roundedValue * tipValuePer;
  const finishedbill = (roundedValue + finalTipBill) / numPeople;

  if (
    billValue > 0 &&
    Number.isInteger(tipValue) === true &&
    tipValue > 0 &&
    Number.isInteger(numPeople) === true &&
    numPeople > 0 &&
    numPeople < billValue
  ) {
    textFinalBill.textContent = finishedbill.toFixed(2);
    textFinalBill.classList.add("showbill__glow");
  }
});

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

resetBtn.addEventListener("click", function (e) {
  bill.value = "";
  tip.value = "";
  peopleCount.value = "";
  textFinalBill.textContent = "";
  textFinalBill.classList.remove("showbill__glow");
});
