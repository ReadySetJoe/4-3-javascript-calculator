

let $displayStr =  document.querySelector('.display-text').textContent;
let $elements = document.querySelectorAll('.col');
let operationQueued = "none";
let lastNum = 0;
let newNum = false;
console.log('elements', $displayStr);


$elements.forEach((element) => {
  element.addEventListener("click",function() {
    cl = this.classList;
    console.log(cl);
    if (cl.contains('num')) {
      if ($displayStr=='0' || newNum) {
        $displayStr = this.textContent;
      } else {
      $displayStr += this.textContent;
      }
    } else {
      if (cl.contains("delete")) {
        operationQueued = "none";
        lastNum = 0;
        $displayStr = '0';

      } else if (cl.contains("plus-minus") && ($displayStr != '0')) {

        if ($displayStr[0]=="-") {
          $displayStr = $displayStr.slice(1);
        } else {
          $displayStr = "-".concat($displayStr);
        }

      } else if (cl.contains("percent")) {
        $displayStr = (Number($displayStr)/100).toString();

      } else if (cl.contains("oper")) {
        console.log("check1: operation = " + operationQueued);

        evaluateDisplay(lastNum, operationQueued, Number($displayStr));

        lastNum = Number($displayStr);
        newNum = true;

        if (cl.contains("divide")) {
          operationQueued = "/";
        } else if (cl.contains("multiply")) {
          operationQueued = "*";
        } else if (cl.contains("subtract")) {
          operationQueued = "-";
        } else if (cl.contains("add")) {
          operationQueued = "+";
        } else if (cl.contains("equals")) {
          evaluateDisplay(lastNum, operationQueued, Number($displayStr));
        }

      } else if (cl.contains("decimal") && !$displayStr.includes(".")) {
        $displayStr += this.textContent;
      }
    }
    document.querySelector('.display-text').textContent = $displayStr;
  });
});

const evaluateDisplay = (a,oper,b) => {
  if (oper == "+") {
    return a + b;
  } else if (oper == "-") {
    return a - b;
  } else if (oper == "*") {
    return a * b;
  } else if (oper == "/") {
    return a / b;
  }
};
