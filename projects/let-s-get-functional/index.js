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
        return customer.gender = 'males'
    })

    return males.length
}; // filter 

var femaleCount = function(array){

    let females = _.reduce(function(acc, cur){
        if (cur.gender === 'female'){
            acc++
        }
        return acc
    }, 0)
    return females

}; //reduce
 
var oldestCustomer = function(array){

    let oldestCustomer = _.reduce(function(acc, cur){
      return acc.age >= cur.age ? acc.name : cur.name;
    })
    return oldestCustomer;
}; // reduce -- no seed value

var youngestCustomer = function(array){

    let youngestCustomer = _.reduce(function(acc, cur){
        return acc.age <= cur.age ? acc.name : cur.name;
    })
    return youngestCustomer
}; // reduce -- no seed value

var averageBalance = function (array) {
    let holder = [];
    for (index = 0; index < array.length; index++) {
        holder.push(array[index].balance.split(''))
    }
    let newHolder = [];
    for (let i = 0; i < holder.length; i++) {
        for (let j = 0; j < holder[i].length; j++) {
            if (holder[i][j] !== '$' && holder[i][j] !== ',') {
                newHolder.push(holder[i][j])
            }
        }
        newHolder.push(' ')
    }
    let h = newHolder.join('')
    let s = h.split(' ')
    let sum = _.reduce(array, function (acc, cur) {

        // MAYBE problem is here ... Need to make yet another loop to ensure they are numbers in an array then reduce?
        return Number(acc) + Number(cur)
    }, 0)
    let members = array.length
    let avg = sum.toFixed() / members
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

var topThreeTags = function () {
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
