//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
let array = Object.values(object)
return array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let sample = Object.keys(object)
    return sample.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

    let array = []
    for (let key in object){

    if (typeof object[key] === 'string'){
        array.push(object[key])
        }
    }
   return array.join(' ')

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array'
    } else {
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    let letter = string[0].toUpperCase();
    let split = string.split('');
    split.shift()
    split.unshift(letter)
    return split.join('')

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let sentence = string.split(' ')
    let bank = []
    for (let index = 0; index < sentence.length; index++){
        bank.push(sentence[index].split(''))
      
    }
  console.log(bank)
  let array = []
    for (index = 0; index < bank.length; index++){
        let letter = bank[index][0].toUpperCase();
        bank[index].shift()
        bank[index].unshift(letter)
        array.push(bank[index].join(''))
    }

   return array.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    let sample = object.name
    let letter = sample[0].toUpperCase();
    let split = sample.split('')
    split.shift();
    split.unshift(letter);
    let choice = split.join('')
    return 'Welcome ' + choice + '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let sample = object.name
    let letter = sample[0].toUpperCase();
    let split = sample.split('')
    split.shift();
    split.unshift(letter);
    let choice = split.join('')

    let sample1 = object.species
    let letter1 = sample1[0].toUpperCase();
    let split1 = sample1.split('')
    split1.shift();
    split1.unshift(letter1);
    let choice1 = split1.join('')

    return choice + ' is a ' + choice1
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (!object.noises){
        return 'there are no noises'
    } else if (object.noises.length > 0){
        return object.noises.join(' ')
    } else if (object.noises.length === 0){
        return 'there are no noises'
    } 

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    let array = string.split(' ')
    let flag = false

for (let index = 0; index < array.length; index++){
    if (array[index] === word){
        flag = true
    }
}

if (flag === true){
    return true
} else {
    return false
}

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name)
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    let flag = false;

    if (!object.friends){
        return false
    }

    for (let index = 0; index < object.friends.length; index++){
        if(object.friends[index] === name){
            flag = true
        }
    }
    
    return flag
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array){
    let bunker = []
    for (let index = 0; index < array.length; index++){
      if (array[index].name !== name && array[index].friends.includes(name) === false){
          bunker.push(array[index].name)
      }
    }
    return bunker
  }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
// if object.key does not exist create key and value in it
// if object.key is there, update value
if (!object[key]){
    object[key] = value
} else {
    object[key] = value
}

return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
let test = Object.keys(object)

for (let index = 0; index < array.length; index++){
    if (test.includes(array[index])){
       delete object[array[index]]
    }
}

return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

let test = array.reduce(function(acc, cur){
if(!acc.includes(cur)){
    acc.push(cur)
}
return acc
}, [])

return test


// return lab
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}