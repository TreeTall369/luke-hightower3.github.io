/**
 *          FUNCTIONS:
 *  
 *      0.  Functions are one of the most profound aspects of JavaScript. We use function to encapulate actions
 *          we wish to perform. By doing this we are able to consolidate our code by using functions instead of 
 *          re-writing or redesign code over and over. Functions can take in data and output data as well, though
 *          it does not have to do these things. 
 */

/**     1.  A function has two phases. The first is the declaration of the function. The second is the invokation.
 *
 *  */        

// declaration
let action = function(value){
    console.log(value)
}

// invokation
let test = action('sample')
console.log(test)

/**     2.  A function we declare can have parameters. These are the values that the function takes in. When we
 *          invoke the function we must have arguments to fill the place of the parameters. Functions can have any
 *          number of parameters, including default parameters in which the value is delcare in the argument.
 *  */        
            // the function is being declare and with it the parameter is created
let sample = function(param){
    console.log(param)
}

sample('test'); // here the argument goes in place of the parameter. the argument is 'test'

/*      3.  There are named functions, anonymous functions and functions assigned to a variable.
 * 
 */

// named function
function named(value){
    console.log(value)
}

// assigned function
let tony = function(number){
    console.log('tony is '+ number + ' years old')

        // anonymous function
    return function(number){
        return number++
    }
}


/**
 * 
 *      4.  We assign a function to a variable with the assignment operator. This allows us to call that
 *          function with () or log the function to the console. Above is an example of function assignment.
 *         
 *  */      


/*      5.  The inputs of a function are tied to the parameters and then the arguments. The outputs of the
            function will occur based on the code of the function and in particular the use of the return
            keyword. A function does not have to return anything, nor does it have to take in a parameter.
            It can simply log something to the console or other simple actions that dont have a return.
 */
            // output only
        let outputs = function(){
            return 42;
        }
            // no input or output
        let logFx = function(){
            console.log('you can do it!')
        }

/*      6.  Scope regarding functions can be very helpful. A variable declare within a function with var is 
            accessible at global scope. However the let and const keywords forbade this. The let keyword used
            in the global scope is reachable from within a functional scope. The const keyword keeps from any
            reassignment. 

 *          The use of variable assignment with the let keyword in functions allows us to cleanly write code without 
 *          entangling varibles in difffernt functions. Returning a function within a function that gives access to 
 *          a varible in the parent scope is a closure. This however allows the variable to be accessed by returning
 *          function within the function. 
 */

            let choice = function(){
                    // functional scope
                let count = 0
                    // returns function
                return function(){
                        // creates closure 
                    return count++
                }
            }
                // assign first invokation
            let example = choice()
                    // invoke function again to access count after return
            console.log(example())

/*      7.  Closure as shown above gives us the ability to access varible count declared in choice function after
            the choice function has been returned. Choice is invoked which returns the anon function, that is
            assigned to example variable which is invoked and logged to the console.
 */