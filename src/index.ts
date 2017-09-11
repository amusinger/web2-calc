import { Calculator } from "./calc";

const calc = new Calculator();

var firstNumber: number;
var secondNumber: number;
var operation: string;


$(document).ready(() => {
    const firstNumber: JQuery<HTMLInputElement> = $('#firstNumber') as JQuery<HTMLInputElement>;
    const secondNumber: JQuery<HTMLInputElement> = $('#firstNumber') as JQuery<HTMLInputElement>;

    const button: JQuery<HTMLButtonElement> = $('.button-operation') as JQuery<HTMLButtonElement>;

    console.log(button.val, firstNumber.val, secondNumber.val)
});

window.onload = () => {
    var el = document.getElementById('firstNumber') as HTMLInputElement;
    firstNumber = Number(el.value);

    var el2 = document.getElementById('secondNumber') as HTMLInputElement;
    secondNumber = Number(el2.value);    
};

console.log(calc.calculate("+", firstNumber,secondNumber));
// console.log(calc.calculate("*", 1,2));
// console.log(calc.calculate("/", 12342,2));
// console.log(calc.calculate("-", 1,2234));
//document.getElementById('firstNumber');
//secondNumber = Number(document.getElementById('secondNumber'));

console.log(calc.calculate("+", 1000,2));
console.log(calc.calculate("*", 1,2));
console.log(calc.calculate("/", 12342,2));
console.log(calc.calculate("-", 1,2234));


// console.log(calc.sum(1,2));
// console.log(calc.sub(1,2));
// console.log(calc.mul(1,2));
// console.log(calc.div(1,2));


