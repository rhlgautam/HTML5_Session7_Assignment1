/*Create a JavaScript function to increment the count value to 1.
Make a global variable and call the function for three times.*/

var count= 1;

//This function will increment the value by 1.
function IncrementOne(){
	count++;
	console.log(count);
}

//This function will call the IncrementOne for the number passed as parameter
function multipleCalls(numberOfCalls){
	for (var i = 1; i <= numberOfCalls; i++) {
		IncrementOne();
	}
}

//Calling IncrementOne fro three times
multipleCalls(3);
