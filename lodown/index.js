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
 *  @param { any:value }: function takes array and number
 *  @return { any:value}: returns end of array from number index
 *
 */
function last(array, number){
    let last = []

    if (!Array.isArray(array)){
        return []
    } else if (!array){
        return []
    } else if (!number){
        return array[array.length - 1]
    } else if (number <= 0){
        return []
    } else if (number <= array.length){
        // for loop
        return array.slice(1)
    } else if (number > array.length){
        return array
    }

}
module.exports.last = last
/**
 * indexOf
 *  @param { any:value }: takes in array and number
 *  @return { any:value}: returns item at number index in array
 * 
 * 
 * 
 */
function indexOf(array, value){

    for (let index = 0; index < array.length; index++){
        if (array[index] === value){
            return index
        }
    }
    return -1
}
module.exports.indexOf = indexOf;
/**
 * contains
 * @param { any:value }: takes in array and value
 * @return { any:value}: return true if value is in array, false if not
 * 
 * 
 */
function contains(array, value){

    if (value === undefined){
        return false
    } else {
        for (let index = 0; index < array.length; index++){
        if (array[index] === value){
            return true
        }
        }
    }
    return false

}
module.exports.contains = contains
/**
 * each
 * @param { any:value }: takes in collection and a function
 * @return { any:value}: returns collection with function applied to each item
 * 
 * 
 */
function each(collection, func){

    if (Array.isArray(collection)){
    
        for (let index = 0; index < collection.length; index++){
    
            func(collection[index], index, collection)
    
        }
    } else {
    
        for (let key in collection){
            func(collection[key], key, collection)
        }
    }
    

}
module.exports.each = each;
/**
 * unique
 * @param { any:value }: takes in array
 * @return { any:value}: return array with duplicates removed
 * 
 * 
 * 
 */
function unique(array){
    let bank = []

    for (let index = 0; index < array.length; index++){
       if (!bank.includes(array[index])){
        bank.push(array[index])
       }
    }
    return bank
}
module.exports.unique = unique;
/**
 * filter
 * @param { any:value }: takes in an array and a function 
 * @return { any:value}: returns array of items that pass function test
 * 
 * 
 * 
 */
function filter(array, func){
    let trueArray = [];

    for (let index = 0; index < array.length; index++){
        if (func(array[index], index, array) === true){
            trueArray.push(array[index])
        }
    }


return trueArray
    
}
module.exports.filter = filter;
/**
 * reject
 * @param { any:value }: takes in an array and a function
 * @return { any:value}: return array with all items that did not pass test
 * 
 * 
 * 
 */
function reject(array, func){

    let trueArray = [];

    for (let index = 0; index < array.length; index++){
        if (func(array[index], index, array) !== true){
            trueArray.push(array[index])
        }
    }


return trueArray

}
module.exports.reject = reject
/**
 * partition
 * @param { any:value }: takes in an array and function 
 * @return { any:value}: separates array into subarrays based on test in func
 * 
 * 
 * 
 */
function partition(array, func){
  
    let falsey = []
    let truthy = []

    for (let index = 0; index < array.length; index++){
        func(array[index], index, array) ? truthy.push(array[index]) : falsey.push(array[index])
    }

    let box = []
    box.push(truthy, falsey)
    return box

}
module.exports.partition = partition;
/**
 * map
 * @param { any:value }: takes in a collection and function 
 * @return { any:value}: returns collection with items updated by func
 * 
 */
function map(collection, func){
   
    let mapped = []

    if (Array.isArray(collection) === true){
      for (let index = 0; index < collection.length; index++){
        mapped.push(func(collection[index], index, collection))
      }
    } else {
        for (let key in collection){
            mapped.push(func(collection[key], key, collection))
        }
    }

    return mapped

}
module.exports.map = map;
/**
 * pluck
 * @param { any:value }: takes in an array and property
 * @return { any:value}: return array with element updated
 * 
 * 
 * 
 */
function pluck(array, property){
     let test = _.map(array, function(element){
        return element[property]
     })
    return test 

}
module.exports.pluck = pluck;
/**
 * every
 * @param { any:value }: takes in collection and func
 * @return { any:value}: return boolean if all elements pass func
 * 
 * 
 * 
 */
function every(collection, func){
    if (Array.isArray(collection)){
    if (func === undefined){
            // no function argument
            for (let index = 0; index < collection.length; index++){
                // look for falsey
                if(!collection[index]){
                    return false
                }
            }
    } else {
        for (let index = 0; index < collection.length; index++){
            if(!func(collection[index], index, collection)){
                return false
            }
        }

    }
    } else {
        if (func === undefined){
            // no function argument
            for (let key in collection){
                // look for falsey
                if(!collection[key]){
                    return false
                }
            }
    } else {
        for (let key in collection){
            if(!func(collection[key], key, collection)){
                return false
            }
        }

    }
    }
    return true

}
module.exports.every = every;
/**
 * some
 * @param { any:value }: takes in collection and func
 * @return { any:value}: return true if one element passes func
 * 
 */
function some(collection, func){
    if (Array.isArray(collection)){
    if (func === undefined){
            // no function argument
            for (let index = 0; index < collection.length; index++){
                // look for falsey
                if(collection[index]){
                    return true
                }
            }
    } else {
        for (let index = 0; index < collection.length; index++){
            if(func(collection[index], index, collection)){
                return true
            }
        }

    }
    } else {
        if (func === undefined){
            // no function argument
            for (let key in collection){
                // look for falsey
                if(collection[key]){
                    return true
                }
            }
    } else {
        for (let key in collection){
            if(func(collection[key], key, collection)){
                return true
            }
        }

    }
    }
    return false

}
module.exports.some = some;
/**
 * reduce
 * @param { any:value }: takes in collectiom, function, inital value
 * @return { any:value}: returns singular value from collection
 * 
 * 
 * 
 */
function reduce(collection, func, seed){
    let result
    // determine if no seed
    if (seed === undefined){
        result = collection[0]
        for (let index = 1; index < collection.length; index++){
            result = func(result, collection[index], index)
        }

        // else there is a seed
    } else {
        result = seed;
        for (let index = 0; index < collection.length; index++){
            result = func(result, collection[index], index)
        }
    }
return result;

}
module.exports.reduce = reduce;
/**
 * extend
 * @param { any:value }: takes in multiple objects
 * @return { any:value}: returns all objects joined into one
 * 
 * 
 * 
 */
function extend(object1, object2, object3){
    if (object3 === undefined){
    return Object.assign(object1, object2)
    } else if (object3){
        return Object.assign(object1, object2, object3)
    }
    
}
module.exports.extend = extend;