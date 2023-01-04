// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // input could be number or string
    // test for string 
    if (typeof base === 'string'){
        // if string find comparison
        // return function that takes in value
        return function(value){
            // return > boolean
          return value > base
        }
        // test for number with typeof operator 
      } else if (typeof base === 'number'){
        // return function that takes in value
        return function(value){
            // return greater than boolean
          return value > base
      }
      }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // test for string
    if (typeof base === 'string'){
        // return and declare function
        return function(value){
            // return lesser than boolean
          return value < base
        }
        // test for number
      } else if (typeof base === 'number'){
        // return function that takes in value
        return function(value){
            // return lesser than boolean
          return value < base
      }
      }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // declare function that takes in string
    return function(string){
        // bring letters to lowercase // get first letter with [0]
       let x = string[0].toLowerCase()
       let y = startsWith.toLowerCase()
       // return boolean comparison of letters
       return x === y
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // declare function that takes string 
    return function(string){
        // bring letters to lowercase, get last letter with [string.length-1]
        let x = string[string.length-1].toLowerCase()
        let y = endsWith.toLowerCase()
        // return boolean comparison of x and y
        return x === y
     }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // declare open array
    let array = [];
    // for loop over strings array
    for (let index = 0; index < strings.length; index++){
        // use .push method, invoke function modify with strings[index] as argument
        array.push(modify(strings[index]))
    }
    // return the full array
    return array
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // declare open array
    let array = []
    // for loop over strings array
    for (let index = 0; index < strings.length; index++){
        // use .push method, invoke function test with strings[index] as argument
        array.push(test(strings[index]))
    }
    // return boolean with .every method, // use arrow function to test if elements are all true
    return array.every(element => element === true)
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
