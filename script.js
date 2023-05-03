console.log('Anyone here?');
console.log('Good. Then let us begin.');

// 100 - Addition
function sumTotal( num1, num2 ){ // declare function to add two numbers
    return sum = num1 + num2; // return result as sum of arguments
} // end sumTotal function

// ### Example 1
console.log('Result should be 5:', sumTotal( 2, 3 )); // log to test

// ### Example 2 
console.log('Result should be 9:', sumTotal( 2, 7 )); // log to test





// 110 - Conditional 
function whichIsBigger( num1, num2 ){ //start function to evaluate the larger of two values
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
function bookend( anArray ){ // start function to find sum of first and last values of given array
    return sum = anArray[0] + anArray[anArray.length-1]; // return sum of first index value and last index value of the array
} // end bookend function

// ### Example 1
let arrayOne = [1, 2, 3, 4, 5]; // declare arrayOne
console.log('The expected result here is 6:', bookend(arrayOne)); // log to test bookend function with arrayOne as argument

// ### Example 2
let arrayTwo = [6, 7, 8, 9, 10, 11, 12];
console.log('The expected result here is 18:', bookend(arrayTwo)); // log to test bookend function with arrayTwo as argument




// 130 Loops, Arrays, and Concatenation Checkpoint
let thang = ["ASDF", "BLAH", "Oh!", "Hi", "There!"]; // declare thang array
function findThatThang(anArray, index){ // start function for parameters of array and index
    let newThang = anArray.slice(index); // declare new array with values from input array starting with indicated index through end
    return newThang.join(' '); // set function result to new array, concatendated with space between values
} // end thang function

// Example 1
console.log('That thang should say Hi There!', findThatThang(thang, 3)); // log to test

// Example 2
console.log('That thang should say Oh! Hi There!', findThatThang(thang, 2)) // log to test





