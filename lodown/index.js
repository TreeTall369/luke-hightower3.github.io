n'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: returns input value unchanged
 * 
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 */

function identity(value){
    return value
};

module.exports.identity = identity;

/**
 * typeOf
 * 
 *  @param { any:value }: function takes in a datatype, primitive or complex
 *  @return { any:value}: this return a string representing the type of data
 * 
 * 
 */
function typeOf(value){

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
    // use Arra.isArray() method
        if (Array.isArray(value) === true){
            return 'array'
            // use instanceof operator 
        } else if (value instanceof Date === true){
            return 'date'
        } else if (value instanceof Object === false){
            return 'null'
        } else if (value instanceof Object === true){
            // having tested for all other possibilities this returns true
            return 'object'
        }
}
}

module.exports.typeOf = typeOf
/**
 * first 
 *  @param { Array, Number }: function takes array and number
 *  @return { Array with desired items}: function returns input value unchanged
 * 
 * 
 * 
 */
function first(array, number){
    let first = []

    if (!Array.isArray(array)){
        return []
    } else if (!array){
        return []
    } else if (!number){
        return array[0]
    } else if (number <= 0){
        return []
    } else if (number <= array.length){
        // for loop
        for (let index = 0; index < number; index++){
            first.push(array[index]) 
        }
        return first 
    } else if (number > array.length){
        return array
    }
}
module.exports.first = first
/**
 * last 
 *  @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function last(){

}
module.exports.
/**
 * indexOf
 *  @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function indexOf(){

}
module.exports.
/**
 * contains
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 */
function contains(){

}
module.exports.
/**
 * each
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function each(){

}
module.exports.
/**
 * unique
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function unique(){

}
module.exports.
/**
 * filter
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function filter() {
    
}
module.exports.
/**
 * rejet
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function reject(){

}
module.exports.
/**
 * partition
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function partition(){

}
module.exports.
/**
 * map
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function map(){

}
module.exports.
/**
 * pluck
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function pluck(){

}
module.exports.
/**
 * every
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function every(){

}
module.exports.
/**
 * some
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function some(){

}
module.exports.
/**
 * reduce
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function reduce(){

}
module.exports.
/**
 * extend
 * @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function extend(){
    
}
module.exports.