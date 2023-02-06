
 /**
 *          VARIABLES: declaration and assignment var, const, let hoisting
 * 
 *          >>This is an introduction to Variables. 
 *          >>The following will explain, through written and coded examples the essence of variables in JavaScript. 
 * 
 * 
 *   0.     Variables are the building blockes of object oriented programming. Variables hold, or 
 *          point data. It is with variables that we are able to relate these pieces of data (value or
 *          reference) to one another. The following is an example of declaring a variable and assigning
 *          it to a string. This is also called initializing the variable. In this example we'll use the 
 *          keyword var. We also use the assigment operator , = .
 */

    var sample;
    sample = 'sample string'
    console.log(sample)

    var example = 'example string'
    console.log(example)

/**  1.     Declaring variables has some syntactical requirements. Using var will allow us to declare the var x, assign
 *          it to a value and then repeat that action without realizing we're doing so. The var keyword also has global
 *          scope as opposed to functional or local scope. Along with var we able to use let and const as keywords to 
 *          intialize variables. Let has functional scope. Const will not allow a reassignment, and it must be initialized 
 *          firstoff. Scope allows us to keep the function of certain variable within a certain bounds. This is very 
 *          useful when create functions, using loops, creating test, etc    
 *     
 */

var keywordVar = 42; // using var
let keywordLet = 3.14; // using let

const funcExample = function(x, y){ 
    // declaring function with const // funcExample will no longer be able to be reassigned
       
        console.log(innerValue) // logging from within function 
        return keywordVar = x ** y; // return keywordVar 
       
}

const funcLet = function(x, y){ // using const 
        let innerValue = 777;  // declaring inside function
        console.log(innerValue) // logging from within function 
        return keywordLet = x ** y // returning keyword Let
}
// this will throw an error if un-commented-out. Why? 
//console.log(innerValue) 
// logging inner value will throw error because globally, it is not defined

let testOne = keywordVar;
let testTwo = funcExample(10, 10)
let testThree = keywordVar; // what happens to this after function is invoked?
console.log(testOne, testTwo, testThree) // tests logged to console

let exOne   = keywordLet
let exTwo   = funcLet(9, 9);
let exThree = keywordLet; // what happens to this after function invoked? Why same effect as var? 
console.log(exOne, exTwo, exThree) // tests logged to console



 /**   2.   We must use camelCase when declaring variables. This is simple enough. The first character is lower cased followed 
  *         by Uppercase at the beginning of every other word in the variable name. examples:
  */ 
                let firstNamesWithMoreThanTenCharactersAndPeopleWhoLiveInLouisianaButAreFromTheWestCoast = {}
                for (let i = 0; i < array.length; i++){}
                const sumOfArrayOfUsers = function(){}
         
  /*         
  *         In these examples we see names of variables chosen for different reasons. The first is to exemplify that, if needed,
  *         can be very detailed with our names and using Uppercase on all the first letters. The next shows that we use a very 
  *         short name, i, to mean index of the array or string we're looping over. Since we use this method so consistently it
  *         is most effective to use just a single character to describe what we're up to. Using a short name in other instances
  *         however would be a bad idea and leave the developer searching more than needed. The last example shows how naming 
  *         a function has particular importance. These are intended to be used several times and thus choosimng a name that 
  *         will be effective in multpile appearances is imperative. Keytake aways: be to-the-point and not overly concise. 
 */

 


 /**    3.  Hoisting is an integral part of what javascript does. Every piece of data put on to the global object is rearranged
  *         as it is passing into JS. This rearrangment is called hoisting. Hoisting will bring varibles declared with var and 
  *         functions up to the top. These will be read first. The value of the variable decalred with var will not be included
  *         in this initial read. The entire function is read however. JS will do this for every part of the code. After the
  *         functions the values of the varibles are hoisted and the rest of the code is completed. 
 * 
 *          Without a grasp of the direction hoisting is going to take your code it will be very difficult to understand why
 *          seemingly logical syntax isnt working. These attributes of JS also promote neat code to preserve the proper 
 *          arrangement when compiling.  
 * 
 * 
 * 
 */


 
 /**
  * 
  * 
  * 
  *     4.     
 */


