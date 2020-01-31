var expressionInput = document.getElementById("Expression");
var resultLabel = document.getElementById("result");
expressionInput.addEventListener("keyup", updateResults2);
result.addEventListener("keyup", updateResults2);

function updateResults2() {
   var expression = expressionInput.value;
   var operatorIndex = -1;
   var indexOfPlus = expression.indexOf('+')
   var indexOfMinus = expression.indexOf('-')
   var indexOfMultiply = expression.indexOf('*')
   var indexOfDivide = expression.indexOf('/')
   var result;

   // for each operator
   if (indexOfPlus != -1) {
      operatorIndex = indexOfPlus;
      var a = parseFloat(expression.substring(0, operatorIndex));
      var b = parseFloat(expression.substring(operatorIndex + 1));
      result = a + b;

   } else if (indexOfMinus != -1) {
      operatorIndex = indexOfMinus;
      var a = parseFloat(expression.substring(0, operatorIndex));
      var b = parseFloat(expression.substring(operatorIndex + 1));
      result = a - b;
   } else if (indexOfMultiply != -1) {
      operatorIndex = indexOfMultiply;
      var a = parseFloat(expression.substring(0, operatorIndex));
      var b = parseFloat(expression.substring(operatorIndex + 1));
      result = a * b;
   } else if (indexOfDivide != -1) {
      operatorIndex = indexOfDivide;
      var a = parseFloat(expression.substring(0, operatorIndex));
      var b = parseFloat(expression.substring(operatorIndex + 1));
      result = a / b;
   }
  
   resultLabel.innerHTML = result;
}