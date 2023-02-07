/**
 *          LOOPS: 
 * 
 *     0.   Loops. The notion of moving through a list is looping. A list, a collection of ideas or information 
 *          is the sort of concept we use to do all sorts of things in day-to-day life. It's evident that a website
 *          needs to be able to access a wide range of lists and to perform a range actions on the data in 
 *          those lists as well. To outline a loop or define the path it will travel we create a starting point,
 *          an ending point, and the patten in which it will move.                          
 */
                // START POINT        END POINT          PATTERN (update)
                for (var index = 0; index < array.length; index++){
                        // perform action upon each index      
                    }

 /*      1. The example above is a for loop we would use to iterate over something that has indices. This means we
            can loop over arrays and strings with a for loop. It has a start, end, and update. These allow us to 
            decide how we are going to loop over the array or string. We can change the direction the loop moves by
            put the end of the array as the start and the beginning as the end point. We can do this but using the
            length of the array-1 as the start point and 0 as the end point. This means also we'd want to use the 
            decrementing operator -- as the update pattern. 
 *          
            This loop can become an infinite loop if the pattern is not alligned with the start and stop points. The
            computer will start the loop but never reach the end point and thus it just keeps going infinitely. Often
            times this is not good and can crash browser. 
 */

        let object = { 1: 'word', 2: 'letter', 3: 'code'}
        
        for (let key in object){
            console.log(key, object[key])
        }

 /*      2.  A for-in loop deals soley with 'objects' or key/value pairs. This loop is designed to not need an
             index to find data. Using for (let KEY in OBJECT){} this iterates through the object by the KEY 
             variable and OBJECT variable. These will have to be used in the function to reach a desired part 
             of the object. 
*/
        
            var count = 0; 
            var array = []
            var seats = 99
  
           while (count < seats ){
                 
            array.push('open') 
            console.log('Enjoy The Show!')  
            count++ 

        }


 /*      3.  Above we have a while loop. The 'While' count is less than seats (seats being the number 99) so the 
            loop will perfom the code within the curly braces until the count reaches its limit ie seats. While 
 *          loops however, must have this opening variable that will be incremented in the code block, otherwise
 *          there is no loop. The code block will fire without ever reaching its end thus creating an infinite
 *          loop.
 */