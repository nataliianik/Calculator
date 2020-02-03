var expressionInput = document.getElementById("Expression");
var resultLabel = document.getElementById("result");
expressionInput.addEventListener("keyup", updateResults);
result.addEventListener("keyup", updateResults);

function updateResults() {
  var expression = expressionInput.value;
  var operatorIndex = -1;
  var indexOfPlus = expression.indexOf('+');
  var indexOfMinus = expression.indexOf('-');
  var indexOfMultiply = expression.indexOf('*');
  var indexOfDivide = expression.indexOf('/');
  var result;
  var operator;

  // for each operator
  if (indexOfPlus != -1) {
    operatorIndex = indexOfPlus;
    operator = 1;

  } else if (indexOfMinus != -1) {
    operatorIndex = indexOfMinus;
    operator = 2;

  } else if (indexOfMultiply != -1) {
    operatorIndex = indexOfMultiply;
    operator = 3;

  } else if (indexOfDivide != -1) {
    operatorIndex = indexOfDivide;
    operator = 4;

  }
  var a = parseFloat(expression.substring(0, operatorIndex));
  var b = parseFloat(expression.substring(operatorIndex + 1));
  switch (operator) {
    case 1: {
      result = a + b;
      break;
    }
    case 2: {
      result = a - b;
      break;
    }
    case 3: {
      result = a * b;
      break;
    }
    case 4: {
      result = a / b;
      break;
    }
  }

  resultLabel.innerHTML = result;
}

//a and b should be outside if
// then use switch to check operators 