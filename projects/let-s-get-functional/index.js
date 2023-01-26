// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./luke-hightower3.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male'
    })
   
    return males.length
}; 

var femaleCount = function(array){

    let females = _.filter(array, function(customer){
       return customer.gender === 'female'
    })
    return females.length

}; 
 
var oldestCustomer = function(array){

    let oldest = array.reduce(function(acc, cur){
      return acc.age >= cur.age ? acc : cur;
    })
    return oldest.name;
}; // reduce -- no seed value

var youngestCustomer = function(array){

    let youngestCustomer = array.reduce(function(acc, cur){
        return acc.age <= cur.age ? acc : cur;
    })
    return youngestCustomer.name
}; // reduce -- no seed value

var averageBalance = function (test) {
    let bank = []
    for (let index = 0; index < test.length; index++){
      bank.push(test[index].balance.split(''))
    }
   // console.log(bank)
    let nextBank = []
    for (let index = 0; index < bank.length; index++){
      for (let j = 0; j < bank[index].length; j++){
        if (!bank[index][j].includes('$') && !bank[index][j].includes(',')){
          nextBank.push(bank[index][j])
        }
      }
      nextBank.push(' ')
    }
    let challenge = nextBank.join('');
    let choice = challenge.split(' ')
    //console.log(choice)
    let map = choice.map(element => Number(element))
    //console.log(map)
    let total = map.reduce((acc, cur) => {return acc + cur})
   // console.log(total.toFixed())
    let avg = total.toFixed() / test.length
    //console.log(avg)
    return avg
}

var firstLetterCount = function (array, letter) {
    let count = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index].name[0].toLowerCase() === letter.toLowerCase()) {
            count++
        }
    }
    return count
};

var friendFirstLetterCount = function (array, customer, letter) {
    let count = 0
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array[index].friends.length; j++)
            if (array[index].name === customer && array[index].friends[j].name[0].toLowerCase() === letter.toLowerCase()) {
                count++
            }
    }
    return count
};

var friendsCount = function (array, title) {
    let list = []
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array[index].friends.length; j++)
            if (array[index].friends[j].name === title) {
                list.push(array[index].name)
            }
    }
    return list
};

var topThreeTags = function (array) {
  
    let bank = []
    for (let index = 0; index < array.length; index++){
      bank.push(array[index].tags)
    }
    let allTags = bank.flat()
    let sort = allTags.sort()
  
};

var genderCount = function (array) {
    let mCount = [];
    let fCount = [];
    let nCount = [];
    if (array[0].gender === 'male') {
        mCount.push('male')
    } else if (array[0].gender === 'female') {
        fCount.push('female')
    } else if (array[0].gender === 'non-binary') {
        nCount.push('non-binary')
    }

    _.reduce(array, function (acc, cur) {
        if (cur.gender === 'male') {
            mCount.push(cur.gender)
        }
    })
    _.reduce(array, function (acc, cur) {
        if (cur.gender === 'female') {
            fCount.push(cur.gender)
        }
    })
    _.reduce(array, function (acc, cur) {
        if (cur.gender === 'non-binary') {
            nCount.push(cur.gender)
        }
    })
    let genObject = {}
    genObject.male = mCount.length;
    genObject.female = fCount.length;
    genObject['non-binary'] = nCount.length;
    return genObject
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
