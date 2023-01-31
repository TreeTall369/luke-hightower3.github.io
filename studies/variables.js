/**
 * 
 * 
 *  VARIABLES
 * 
 *  0. intro 
 * 
 *  1. declare/assignment ie the topic with more detail
 * 
 *  2. next topic with more information, examples 
 * 
 * /**
 *          VARIABLES: declaration and assignment var, const, let hoisting
 * 
 *   0.     This is an introduction to Variables. The following will explain, through written 
 *          and coded examples the essence of variables in JavaScript. 
 */

    let example = 'put examples here'

/**  1.     Variables are the building blockes of object oriented programming. Variables hold, or 
 *          point data. It is with variables that we are able to relate these pieces of data (value or
 *          reference) to one another. Variable build into functions. 
 *
 *   2.     The first form of declaring a variable was var --- as seen below the keyword(symbol) var
 *          declares the variable exampleVariable. 
 *                  BRIEF ASIDE:  --- camelCase required in all variable declaration --- 
 *                                --- lowerCase, followedBy, upperCaseThereAfter, theEnd ---
 *          
 *   3.     We can also assign the variable to some data. In the case below the variable is now assigned
 *          to the string 'Hello Louisiana!'. In this example we have declared the variable on one line
 *          and assigned it on the next. If we wish we can declare and assign on the same line like 
 *          the example talkative which is declare with var and assigned to a string with the assignment 
 *          operator = . 
 * 
 *   4.     The catch, so to speak, to var and its power is that we as developer will inevitably re-declare 
 *          variables that will not be noticed. Why is this? What does this mean? Using var allows the developer
 *          to var and that same variable name and the value ie what the variable points at will also re frame . 
 *          We're left with a loose bolt in the structure. ES 6, a major update to JS in 20... Added const 
 *          and let. These dont allow us to redeclare them without throwing an error. Const can't even be reassigned.?
 * 
 *          
 *          Edit and rewrite some parts
 *          Write Hoisting section
 *          What's with the 0. 1. 2. format? Really necessary?
 *          Dont forget!  CONSOLE.LOG() each part...
 */

var exampleVariable;
exampleVariable = 'Hello Louisiana!';

var talkative = 'What is going on?';

const friendInvite = function (friend) {
    return 'Hey' + ' ' + friend + ', ' + 'do you want to come over?'
}

let i = 0;

 // hoisting

