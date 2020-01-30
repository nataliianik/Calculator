var expressionInput = document.getElementById("Expression");
var resultLabel = document.getElementById("result");

expressionInput.addEventListener("keyup", updateResult);
result.addEventListener("keyup", updateResult);

function updateResult() {

   var tokens = expressionInput.value.split(' ');
   //get a sring and parse it
   var a = parseFloat(tokens[0]);
   var b = parseFloat(tokens[2]);
   var operator = tokens[1];
   var result;

   if (isNaN(a) || isNaN(b)) {
      result = `${expressionInput.value}is not a valid expression`;
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
