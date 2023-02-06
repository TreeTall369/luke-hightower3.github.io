// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time){
console.log(greeting + ' ' + location + ' ' + time)
};

// 2.
var contestants = function(array){
    return array.length
};

// 3.
var filterSpecies = dogs.filter(function(item){
    if (item.species === 'dog'){
        return item
    }
})

// 4. 

var dogContestants = [...filterSpecies];

// 5. 

var dogsWithClasses = dogContestants.map(function(element){
    if(element.weight > 0 && element.weight <= 10){
        element.class = 'red'
    } else if (element.weight > 10 && element.weight <= 20){
        element.class = 'yellow'
    } else if (element.weight > 20 ){
        element.class = 'green'
    }
    return element
});
    
// 6.
var firstInClass = function(array, object={}){
if(array.length === 0){
    return object
}
let task = Object.keys(array[0])
for (let index = 0; index < task.length; index++){
    object[task[index]] = 1
}
    return firstInClass(array.slice(1), object)
};

// 7.
var votes = dogs.reduce(function(acc, cur){
    acc += cur.votes
    return acc
}, 0);