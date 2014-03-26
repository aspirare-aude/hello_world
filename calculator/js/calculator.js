
var Calculator = (function () {

var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

 return {

 removeOperator: function (inputVal, input, btnVal) {

 	        var btnVal = btnVal;

        	var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;

 },

 evaluateEquation: function (inputVal, input) {
            var equation = inputVal;
			var lastChar = equation[equation.length - 1];

		    // Replace x and ÷ with * and / .
		    equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
            
            // Check last character of the equation. If it's an operator or a decimal, remove it
            if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');

			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
 },

 clearAll: function (input) {
            input.innerHTML = '';
			decimalAdded = false;
			return input.innerHTML;

 },

 decimalSolution: function (input, btnVal) {
          
           if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}

 }

 }

})();

