

let $displayStr =  document.querySelector('.display-text');
let displayExpr = [];
let notNum = false;


document.querySelector('.col').addEventListener("click",function() {
  if (this.textContent == '=') {
    evaluateDisplay();
  } else {
    cl = this.classList();
    if (cl.contains('plus-minus') || ($displayStr != '0')) {
        displayExpr.push("pm");
        if ($displayStr[0]=="-") {
          $displayStr.slice(1);
        } else {
          $displayStr.push("-");
        }
    } else if (cl.contains('divide')) {
      $displayExpr.push("/");
    } else if (!Number.isNaN(this.textContent)) {
      $displayStr += this.textContent;
    }
    $displayExpr.push(this.textContent);
  }
});

evaluateDisplay(function() {
  let out = 0;
  let next;
  displayExpr = displayExpr.reverse();
  while (!(displayExpr === undefined || displayExpr.length == 0)) {
    next = displayExpr.pop();
    


  }



});
