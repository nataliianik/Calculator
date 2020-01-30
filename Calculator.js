var input1 = document.getElementById("termA");
var input2 = document.getElementById("termB");
var resultLabel = document.getElementById("result");
var operatorSelect = document.getElementById("operator-select");

input1.addEventListener("keyup", updateResult);
input2.addEventListener("keyup", updateResult);
operatorSelect.addEventListener('change', updateResult);
//calculator

function updateResult() {

   var a = parseFloat(input1.value);
   var b = parseFloat(input2.value);
   var operator = operatorSelect.value;

   var result;
   if (isNaN(a) || isNaN(b)) {
      result = `${input1.value + ' ' + input2.value}is not a valid expression`;
   } else {
      if (operator == '+') {
         result = a + b;
      } else if (operator == '-') {
         result = a - b;
      } else if (operator == '*') {
         result = b * a;
      } else if (operator == '/') {
         result = a / b;
      } else {
         result = `${operator}is not valid operator`;
      }
   }
   resultLabel.innerHTML = result;
}

console.log(result);
