/**
 *          LOOPS: 
 * 
 *      for, for-in, while loops 
 *      loop numbers up and down 
 *      loop forward, backward in array 
 *      loop over object, over array
 * 
 *     0.   Loops. Ubiquitously helpful. Loops are working in our lives and minds all over the place. The notion 
 *          of moving through a list is looping. A list, a collection of ideas or information is the sort of 
 *          concept we use to do all sorts of things in day-to-day life. To shop accurately for food we'll 
 *          form some kind of equation for each item in the list. A list of 10 things where the frozen things
 *          have to be picked up last, or if somethng isnt there we have to skip it, maybe get something else.
 *          Looping, moving through, iterating is essential to developing websites. It's evident that a website
 *          needs to be able to access a wide range of lists and to perform a range actions on the data in 
 *          those lists as well. To outline a loop or define the path it will travel we create a starting point,
 *          an ending point, and the patten in which it will move. 
 *     
 *                   for-loop's syntax are as such:
 * 
 *                                START POINT        END POINT          PATTERN (update)
 *                          for (var index = 0; index < -------.length; index++){
 *                                     perform action upon each index               
 *                                  }
 */




 /*      1.  The example above is a for loop we would use to iterate over something. What is that something?
 *          Why is the 'thing we loop over' in the end point? Both start point and end point need a number to run. 
 *          The difference therein results in how many times it will loop (iterate). By this we can loop over an 
 *          Array from 0 to end by using the .length property. To reverse the direction the .length property will be
 *          most effective at the starting point since the 'end' of the array is where the iteration will need to
 *          start. 
 */

 



 /*      2.  As we can see however Loops don't need to pair linked with a collection. If we wish to print numbers
 *          for example or perform the same action several times we can use loops. The for loop would simply have a 
 *          given number as the start and end point to perform this. We can however use another loop called the
 *          while loop. While loops can do essentially the things as a for loop. However there are exceptions and
 *          special scenarios. The syntax for a while loop is as such:
 * 
 *             var count = 0; 
 *             var array = []
 *             var seats = 99
 * 
 *          while (count < seats ){
 *                 
 *               array.push('open') 
 *               console.log('Enjoy The Show!')  
 *               count++ }
 */

 




 /*      3.  Above we have a while loop that compares two value with the lesser operator. 'While' count is
 *          less than seats (seats being the number 99) the loop will perfom the code within the curly braces
 *          So in this case we are going to push into a literal array as well as log to the console our special
 *          note. These variables can be adjusted as need too by reassigning the count and seats variable. While 
 *          loops however, must have this opening variable that will be incremented in the code block, otherwise
 *          there is no loop. The code block will fire without ever reaching its end thus creating an infinite
 *          loop. 
 *
 *          for-in loop
 *          console.log
 *          examples
 * 
 */