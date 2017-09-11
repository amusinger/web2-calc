"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
var calc = new calc_1.Calculator();
var firstNumber;
var secondNumber;
var operation;
$(document).ready(function () {
    var firstNumber = $('#firstNumber');
    var secondNumber = $('#firstNumber');
    var button = $('.button-operation');
    console.log(button.val, firstNumber.val, secondNumber.val);
});
window.onload = function () {
    var el = document.getElementById('firstNumber');
    firstNumber = Number(el.value);
    var el2 = document.getElementById('secondNumber');
    secondNumber = Number(el2.value);
};
console.log(calc.calculate("+", firstNumber, secondNumber));
// console.log(calc.calculate("*", 1,2));
// console.log(calc.calculate("/", 12342,2));
// console.log(calc.calculate("-", 1,2234));
//document.getElementById('firstNumber');
//secondNumber = Number(document.getElementById('secondNumber'));
console.log(calc.calculate("+", 1000, 2));
console.log(calc.calculate("*", 1, 2));
console.log(calc.calculate("/", 12342, 2));
console.log(calc.calculate("-", 1, 2234));
// console.log(calc.sum(1,2));
// console.log(calc.sub(1,2));
// console.log(calc.mul(1,2));
// console.log(calc.div(1,2));
//# sourceMappingURL=index.js.map