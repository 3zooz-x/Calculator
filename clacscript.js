const add = function (a, b) {
    return a + b;
}
const subract = function (a, b) {
    return a - b;
}
const multiply = function (a, b) {
    return a * b;
}
const divide =  function (a, b) {
    if (b == 0) {
        return 'ERROR PLEASE CLEAR';
    }
    else {
        return a / b;
    }
}
const operate = function (a, op, b) {
    if (op === '+') {
       return add(a, b);
    }
    if (op === '-') {
       return subract(a, b);
    }
    if (op === '*') {
       return multiply(a, b);
    }
    if (op === '/') {
       return divide(a, b);
    }
}
const dis = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const point = document.querySelector("#point");
const bs = document.querySelector("#backSpace");
let firstNumber;
let operator = '';
let secondNumber = '';
buttons.forEach(button =>{
    button.addEventListener("click", () => {
       if (Number.isInteger(Number(button.textContent))) {
            if (dis.textContent == '0') {
                dis.textContent = button.textContent;
                return;
            }
            if (firstNumber === Number(dis.textContent)) {
                dis.textContent = '';
                dis.textContent += button.textContent;
                secondNumber = Number(dis.textContent);
            }
            else {
                dis.textContent += button.textContent;
                secondNumber = Number(dis.textContent);
            }
      }
      if (button.textContent == '+'|| button.textContent == '-'|| button.textContent =='*' || button.textContent =='/') {
        if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
            dis.textContent = operate(firstNumber, operator, secondNumber);
            secondNumber = '';
            operator = '';
        }
        if (dis.textContent === '') {
            return;
        }
        else {
            firstNumber = Number(dis.textContent);
            operator = String(button.textContent);
        }
        
      }
      
}); 
});
equal.addEventListener("click", () => {
    if (operator != '' && firstNumber !== '' && secondNumber !== '') {
        return dis.textContent = operate(firstNumber, operator, secondNumber);
    }
});
clear.addEventListener("click",() => {
    dis.textContent = 0;
    firstNumber = '';
    operator = '';
    secondNumber = '';
});
point.addEventListener("click", () => {
    if (!(dis.textContent.includes('.'))) {
        dis.textContent = dis.textContent + '.';
    }
});
bs.addEventListener("click", () => {
    dis.textContent = dis.textContent.substring(0, dis.textContent.length - 1);
})



