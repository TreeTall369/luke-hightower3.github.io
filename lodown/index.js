'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the action Function to each value in the collection.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection
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
 * @param { any:value } value: function takes in any value
 * @return { any:value }: function returns input value unchanged
 */

function identity(value){
    return value
};

module.exports.identity = identity;

/**
 * typeOf: this will give us a string stating the type of data
 * 
 *  @param { any:value } value: function takes in a datatype, primitive or complex
 *  @return { string }: this return a string representing the type of data
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
 *  first: gives us portion of array from first position
 *  @param { Array } array: Function takes in an array. 
 *  @param { Number } number: Function take in a number.
 *  @return { Array }: Function returns array from the beginning to index Number.
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
 * last : Gives us portion of array from last position.
 *  @param { Array } array: Function takes in an array. 
 *  @param { Number } number: Function take in a number.
 *  @return { Array }: Function returns array from the end to index Number.
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
 * indexOf: we can find the index of certain values presumed to be in array
 *  @param { Array } array: This function takes in array .
 *  @param { value } value: It takes in a number.
 *  @return { Array }: The function will return the index of an array with a value; 
 *                      if the value does not exist -1 is returned.
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
 * contains: This can detemine if an array contains a value;
 * @param { Array } array: Function takes in an array.
 * @param { Any:value } value: Function takes in a value.
 * @return { Boolean }: Function returns boolean.
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
 * each: this will perform an action on each item in a collection. Each does not have a return.
 * @param { collection } collection: takes in collection.
 * @param { Function } func: Function takes in a function.
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
 * unique: this will create new array without any duplicates from the input.
 * @param { Array } collection: Takes in an array.
 * @return { Array }: return array with only unique items.
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
 * filter: this will iterate over an array and pass each value through a function.
 *          A new array with all items that return true from function is created.
 * @param { Array } array: takes in an array.
 * @param { Function } func: takes in a function.
 * @return { Array }: returns array of items return true from the function input.
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
 * reject: this will iterate over an array and pass each value through a function.
 *          A new array with all items that return FALSE from function is created.
 * @param { Array } array: takes in an array. 
 * @param { Function } func: takes in a function. 
 * @return { Array }: return array with all items that did not pass test.
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
 * partition: this will iterate over the array and create sub arrays from each item sorted by
 *              their return from the function. True in one array, False in the other.  
 * @param { Array } array: takes in an array.
 * @param { Function } func: takes in a function.
 * @return { Array }: This will return one array with two sub arrays. Within those will
 *                     be the parted items. 
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
 * map: this will iterate over a collection and create a new array with
 *      the return from the input function invoked for each item in the array. 
 * @param { collection } collection: takes in a collection. 
 * @param { Function } func: input is a function.
 * @return { collection }: returns collection with items updated by the function.
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
 * pluck: this will return the value at a property with the object with the array
 * @param { Array } array: takes in an array of objects
 * @param { property } property: takes in a value that is property
 * @return { Array }: return array with element updated
 */
function pluck(array, property){
     let test = _.map(array, function(element){
        return element[property]
     })
    return test 

}
module.exports.pluck = pluck;
/**
 * every: determines if every item in collection passes a test
 * @param { collection } collection: takes in collection.
 * @param { Function } func: takes in a function.
 * @return { any:value}: return boolean if all elements pass function
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
 * some: determines if just one item passes a test from the array
 * @param { collection } collection: takes in collection and func
 * @param { Function } func: taking in a function.
 * @return { any:value}: return true if one element passes func
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
 * reduce: takes whole array and delivers single result using func inter element
 * @param { collection } collection: takes in a collection.
 * @param { Function } func: takes in a function.
 * @param { Any:value } seed: takes in a value for seed
 * @return { any:value}: returns singular value from collection
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
 * extend: this makes a singel object from multiple that allow overlapping keys to not be duplicated
 * @param { collection } object1: takes in first object.
 * @param { collection } object2: takes in next object.
 * @param { collection } object3: takes in last object.
 * @return { any:value}: returns all objects joined into one
 */
function extend(object1, object2, object3){
    if (object3 === undefined){
    return Object.assign(object1, object2)
    } else if (object3){
        return Object.assign(object1, object2, object3)
    }
    
}
module.exports.extend = extend;