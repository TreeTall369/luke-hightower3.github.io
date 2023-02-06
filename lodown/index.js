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
 *  @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 */
function typeOf(){

}
module.exports.
/**
 * first 
 *  @param { any:value }: function takes in any value
 * @return { any:value}: function returns input value unchanged
 * 
 * 
 * 
 */
function first(){

}
module.exports.
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