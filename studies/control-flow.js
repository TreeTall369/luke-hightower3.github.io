/**
 *          CONTROL FLOW:
 * 
 *     0.   Control Flow refers to conditional statements and the power they give a developer to pass values 
 *          through a chain of conditions (boolean values) to determine what action the data requires. In a general 
 *          sense control flow is filtering with conditional statements. We must ask if numerous aspects of a piece 
 *          of data are true (e.g. if its a number, big, small, a letter, case, length, etc) and to do this we have 
 *          to be thoughtful or at least flexible about how we arrange the control flow. Certain details need to be 
 *          checked first, is what that means.
 */




 /*     1.   At times the path of the condtions needed to get a function do what it needs to do is unexpected. Thus 
 *          it is advisable to experiment with different arrangements for different outcomes. Along with finding 
 *          clever ways to filter data we need to be mindful of using the simplest and least repetitive code
 *          when developing control flows. A simple code sometimes starts out messy so working it down to a
 *          more refined method is key to the best control flow.
 * 
 */

 


 /*     2.   if, else if and else statements form a trio. To fully utilize these we'll complete all three elements
 * 
 *          first part:             if(condition){
 *                            perform action   } 
 *          second part:          else if(condtion){
 *                            perform action  
 *          last part:             } else {
 *                            perform action }
 *           
 *              In this context the first and second conditions will be written within the parethesis while the 
 *              last part does not have a condition. The last: else{ } is essentially a default action. We can fill
 *              this chain of code with as many "else if" conditions as needed. This provides the develop a way of 
 *              sending a complex chain of actions with desired outcomes honed in upon. A side note, we do not use 
 *              return within the action 
 */

 




 /*     3.   Switch statements are a modified version of if, else if, else statements. As mentioned above we can 
 *          build the conditional links to be as long as we'd like however depending upon the desire actions
 *          within the curly braces { performance action } there is a simpler way. Switch statements have the
 *          syntax: 
 *                       var cardTotal = 10;
 *                       var itemNote =  'The following item has just been delivered!'  
 *                       var totalNote = 'Your card balance is now '
 *                       var proEx = 'Novelty Toilet Paper';
 *                       var defaultMsg = 'Sorry, you have the wrong number!'
 *                       
 *                          switch (proEx){
 *                        case 'Funny Shaped Soap':
 *                        console.log(itemNote + ':  ' + proEx + ' ' +  + cardTotal--);
 *                          break;
 *                        case 'Novelty Toilet Paper with Famous Novels':
 *                         console.log(itemNote + ':  ' + proEx + ' ' +  + cardTotal--);
 *                          break;
 *                        case 'Slippery Slippers':
 *                         console.log(itemNote + ':  ' + proEx + ' ' +  + cardTotal--);
 *                          break;
 *                        default:  
 *                              defaultMsg;
 *                          }
 * 
 *                 In this context we are able to do several things using variables with global scope and a switch
 *                  statement that eliminates some lines of code and allows the developer to view and adjust easily. 
 *                 Each string in the the list of variables above is organized and easily read. The setup of the 
 *                 sentence is also easier to distinguish than the syntax of els if statements. The syntax of switch 
 *                  statements has case followed by a value (expression) then a : colon. Next line is an action ended
 *                 by a semi-colon. The next line is break; also ended by a semi-colon. The last case can be 
 *                  substituted with a default: with just a colon again, followed by code on the next line and a ; 
 *                 though it does not have to end with a default: (condtionless) line. 
 * 
 *                  examples
 *                  console.log
 */