/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { use } = require("chai")

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    // open loop to iterate over array
    for (let index = 0; index < array.length; index++){
        // search for string
        if (array[index].name === string){
            // if exists return that object
            return array[index]
        } 
    }
    // outside of for loop return null // triggers after no match is found in for loop
    return null
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
        // open for loop over animals array
    for (let index = 0; index < animals.length; index++){
        // use same search logic
        if (animals[index].name === name){
            // if the name is there replace the object with .splice method
            return animals.splice(index, 1, replacement)
        } 
    }

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    // open loop 
    for (let index = 0; index < animals.length; index++){
        // search logic
        if (animals[index].name === name){
            // use .splice method to remove index
            animals.splice(index, 1)
        } 
    }
    return 
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, object){
    // initialise boolean flag 
    let flag = false 
    // if object has name and species
    if (object.name.length > 0 && object.species.length > 0){
        // open for loop over animals array
        for (let index = 0; index < animals.length; index++){
            // look for match in names
            if (animals[index].name === object.name){
                // flip flag variale when true
                flag = true 
            }
        }
    }
        // if there is no match flag variable stays the same
    if (flag === false){
        // if flag stays false push new object into aninals array
        animals.push(object)
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
