/**
 *          FUNCTIONS:
 *  
 *      the first two phases using fx's. Declare then Invoke/Call 
 *      whats the difference between parameters and arguments passed to a function
 *      whats the syntax for a named function?
 *      how do we assign a function to a variable?
 *      How do we specify inputs and outputs
 *      Scope: functions can see and modify variable in parent and global scopes, inverse not true
 *      Closures: functions form closures arpund the data they house. if an object returned from the function 
 *      and is held in memory somewhere (referenced), that closrue stays alive, and data can contunue to exist in these closures!
 * 
 *      0.  Functions are the most profound aspect of JavaScript. Functions are declared, in this phase they are 
 *          are statement and not an expression. A function is declared to draw together various needed actions
 *          and re-use what is encapsulated in the function. Functions eliminate 're-writing' code over and over. 
 *          They can be declared two ways: 
 * 
 *          var exampleFx = function(parameterOne, parameterTwo){ 
 *              var testFx = parameterOne + ' and ' + parameterTwo;
 *                  return  testFx
 *                      }
 */




/*      1.  This version sets the function name in variable form. The parameters are then indicated within the () and 
 *          the code block in written within the {}. A function declared like this allows us to see the function assigned
 *          to the variable which aids in following the passage of functions through variable assignments. While written 
 *          like this: exampleFx; the function is an object but not invoked. It remains a statement not expression. This 
 *          is the second version of :
 * 
 *          Calling a function or invoking a function, or the expression of the function look like this:
 * 
 *            function exampleFx(parameterOne, parameterTwo){ 
 *                  var testFx = parameterOne + ' and ' + parameterTwo;
 *                  return  testFx;
 *                      }
 *                 
 *            var favDishes = exampleFx('pumpkin pie', 'whipped cream');
 *            console.log(favDishes);
 */




/*      2.  In this example we have a variable assign to a function being expressed. That variable is then being logged
 *          to the console. So it should say pumpkin pie and whipped cream. This function is using parameters which have
 *          been coded into the function using camelCase. This way is not required (so-to-speak). There could be a
 *          simpler way to find desired results using the arguments object. Arguments is a keyword that references the
 *          ( ) where we put the parameters as though it were an array. By this we can put multiple values into the 
 *          ( value1, value2, value3 ) and we can access those within the {} by use of argument[0] or argument[1].
 *          The bracket notation points to the next value after the comma. This is help with unknown unknowns. 
 * 
 * 
 */