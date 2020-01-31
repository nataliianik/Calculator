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
   var operator;
   
   switch(operator) {
    case'+':
    {
      operatorIndex = indexOfPlus;
      result = a + b;
      var a = parseFloat(expression.substring(0, operatorIndex));
      var b = parseFloat(expression.substring(operatorIndex + 1));
      break;
    }
    case'-':
    {
      operatorIndex = indexOfPlus;
      result = a + b;
      var a = parseFloat(expression.substring(0, operatorIndex));
      var b = parseFloat(expression.substring(operatorIndex + 1));
      break;
    }

    case'*':
    {
     operatorIndex = indexOfPlus;
     result = a + b;
     var a = parseFloat(expression.substring(0, operatorIndex));
     var b = parseFloat(expression.substring(operatorIndex + 1));
     break;
   }
   case'/':
    {
    operatorIndex = indexOfPlus;
    result = a + b;
    var a = parseFloat(expression.substring(0, operatorIndex));
    var b = parseFloat(expression.substring(operatorIndex + 1));
    break;
   }
    resultLabel.innerHTML = result;

}
 
   resultLabel.innerHTML = result;
} 