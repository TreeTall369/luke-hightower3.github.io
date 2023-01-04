// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    
    return Array.isArray(value)
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // input will be random data type
    // test what type of data it is
    // use typeof operator to compare with 'string names of data types'
  
    if (typeof value === 'number'){
        return false
    } else if (typeof value === 'string'){
        return false
    } else if (typeof value === 'boolean'){
        return false
    } else if (typeof value === 'function'){
        return false 
    } else if (typeof value === 'undefined'){
        return false
    } else if (typeof value === 'object'){
        // use Arra.isArray() method
            if (Array.isArray(value) === true){
                return false
                // use instanceof operator 
            } else if (value instanceof Date === true){
                return false
            } else if (value instanceof Object === false){
                return false
            } else if (value instanceof Object === true){
                // having tested for all other possibilities this returns true
                return true
            }
    }
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    
    if (typeof value === 'number'){
        return false
    } else if (typeof value === 'string'){
        return false
    } else if (typeof value === 'boolean'){
        return false
    } else if (typeof value === 'function'){
        return false 
    } else if (typeof value === 'undefined'){
        return false
    } else if (typeof value === 'object'){
        // use Array.isArray() method // if this is true return true -- means its a collection ie [] 
            if (Array.isArray(value) === true){
                return true
                // use instanceof operator 
            } else if (value instanceof Date === true){
                return false
            } else if (value instanceof Object === false){
                return false
            } else if (value instanceof Object === true){
                // having tested for the other possibility this returns true once reached 
                return true
            }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // use type of operator to find type, return type in string
    if (typeof value === 'number'){
        return 'number'
    } else if (typeof value === 'string'){
        return 'string'
    } else if (typeof value === 'boolean'){
        return 'boolean'
    } else if (typeof value === 'function'){
        return 'function'
    } else if (typeof value === 'undefined'){
        return 'undefined'
    } else if (typeof value === 'object'){
        // use Array.isArray() method 
            if (Array.isArray(value) === true){
                return 'array'
                // use instanceof operator 
            } else if (value instanceof Date === true){
                return 'date'
                // this test leave only 'null' as possible outcome
            } else if (value instanceof Object === false){
                return 'null'
            } else if (value instanceof Object === true){
                // having tested for the other possibility this returns true once reached 
                return 'object'
            }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
