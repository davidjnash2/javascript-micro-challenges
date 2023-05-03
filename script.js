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





// 140 Loops, Arrays, and Concatenation Checkpoint
// ### Example 1
let employees = [ // declare array
    { name: "Tony", yearsOfExperience: 10 }, // add object to array
    { name: "Carla", yearsOfExperience: 4 }]; // add object to array

function workForce( anArray ){ // start function with array as parameter
    let sum = 0; // set default result to 0
    for (let employee of anArray){ // start conditional loop for each object in array
        sum += employee.yearsOfExperience; // add all object values for yearsOfExperience 
    } // end loop
    return sum; // function result
} // end workForce function

console.log('Expected result for total years of experience should be 14:', workForce(employees)); // log to test


// ### Example 2
employees.push({ name: "Kris", yearsOfExperience: 14 });// push new object to employees array
console.log('Expected result for total years of experience should be 28:', workForce(employees)); // log to test





// 150 Loops and Two Dimensional Arrays Checkpoint
function addAllArrays (arrays){ // start function to sum all values within nested arrays
    let sum = 0; // set default sum at zero
    for (let i=0; i<arrays.length; i++){ // start first loop to cycle through the first level of arrays
        for(let x=0; x<arrays[i].length; x++){ // another loop to access values inside the nested arrays
            sum += arrays[i][x]; // equation to sum all values contained in all arrays within initial array
        } // end second for loop
    } // end first for loop
    return sum // set result for function
} // end addAllArrays function

// Example 1
console.log('The expected result here is 15:', addAllArrays([ [1, 2], [3, 4, 5] ])); // log to test

// Example 2
console.log('The expected result here is 21:', addAllArrays([ [1, 2], [3, 4, 5], [6] ])); // log to test