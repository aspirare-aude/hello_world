window._skel_config = {
	prefix: 'css/style',
		preloadStyleSheets: true,
	resetCSS: true,
	boxModel: 'border',
	grid: { gutters: 30 },
	breakpoints: {
			wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
			narrow: { range: '481-1199', containers: 960 },
			mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
	}
};


$(document).ready(function() {

// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        // Get the input and button values
        var input = document.querySelector('.screen');
        //gets value of screen input
        var inputVal = input.innerHTML;
        //gets value of button clicked
        var btnVal = this.innerHTML;
        
        // If clear key is pressed, erase everything
        if(btnVal == 'C') {
            Calculator.clearAll(input);
        }
        
        // If eval key is pressed, calculate and display the result
        else if(btnVal == '=') {
            Calculator.evaluateEquation(inputVal, input);
            }
        
        else if(operators.indexOf(btnVal) > -1) {
            Calculator.removeOperator(inputVal, input, btnVal); 
        }
        
        // Decimal problem is left - flag 'decimalAdded' .
        else if(btnVal == '.') {
            Calculator.decimalSolution(input, btnVal);      
        }
        
        // if any other key is pressed, just append it
        else {
            input.innerHTML += btnVal;
        }
        
        // prevent page jumps
        e.preventDefault();
    } 
}
});

