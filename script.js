console.log('Anyone here?');
console.log('Good. Then let us begin.');

// 100 - Addition
function sumTotal ( num1, num2 ){ // declare function to add two numbers
    sum = num1 + num2; // define result as result of addition equation
    return sum; // return result
} // end sumTotal function

// ### Example 1
console.log('Result should be 5:', sumTotal( 2, 3 )); // log to test

// ### Example 2 
console.log('Result should be 9:', sumTotal( 2, 7 )); // log to test





// 110 - Conditional 
function whichIsBigger ( num1, num2 ){ //start function to evaluate the larger of two values
    if ( num1 > num2 ){ // start conditional if num1 value larger
        console.log( 'The first number was bigger!' ); // log statement reflecting larger num1 value
    } else if ( num2 > num1 ){ // continue conditional if num2 is bigger
        console.log( 'The second number was bigger!' ); // log statement indicating num2 is bigger
    } else if ( num1 = num2 ){ // end conditional if numbers are equal
        console.log( 'The numbers are the same!' ); // log statement reflecting equal values
    } // end conditional statements
} // end whichIsBigger function

// ### Example 1 
whichIsBigger( 3, 2 ); // test

// ### Example 2
whichIsBigger( 7, 7 ); // test (Examples 2 & 3 were listed out of order in assignment, re-ordered sequentially here)

// ### Example 3
whichIsBigger( 2, 7 ); // test




// 120 Arrays
function bookend(anArray){ // start function to find sum of first and last values of given array
    sum = anArray[0] + anArray[anArray.length-1]; // set equation to sum first index value and last index value of the array
    return sum; // return sum of equation
} // end bookend function

// ### Example 1
let arrayOne = [1, 2, 3, 4, 5]; // declare arrayOne
console.log('The expected result here is 6:', bookend(arrayOne)); // log to test bookend function with arrayOne as argument

// ### Example 2
let arrayTwo = [6, 7, 8, 9, 10, 11, 12];
console.log('The expected result here is 18:', bookend(arrayTwo)); // log to test bookend function with arrayTwo as argument
