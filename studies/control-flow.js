/**
 *          CONTROL FLOW:
 * 
 *     0.   Control Flow refers to conditional statements. Conditional statements give the developer the power to 
 *          determine something about the data. It is then up to the dev to decide what is next. We must ask if 
 *          numerous aspects of a piece of data are true or false (e.g. if its a number, big, small, a letter, case, 
 *          length, etc). Certain details need to be clarified for functions to work effectively.
 *          
 */
            if (x === 1){
               // doSomething();
            } else if ( x === 2){
               // doSomethingDifferent();
            } else {
               // doJustThis();
            }

 /*     1.  In this example above we see that a path is laid out for the data to travel. This path is created using
            if / else if / else statements. The if statement provides our inital test, if that is true or resolves 
            to truthy the behavior will fire. If it does not pass that test we can add another test. When we know we
            only two tests it may be help to simply write else { function() } and close the statement there. If we
            know we have more test to conduct we'll first write an else if statement, as shown above. It is key to 
            know that the 'else statement' cannot come before the else statement, which is logical intuitive by
            process of elimination. 
 * 
 */
            var cardTotal = 10;
            var itemNote =  'The following item has just been delivered!'  
            var totalNote = 'Your card balance is now '
            var proEx = 'Novelty Toilet Paper';
            var defaultMsg = 'Sorry, you have the wrong number!'
                                   
            switch (proEx){
            case 'Funny Shaped Soap':
            console.log(itemNote + ':  ' + proEx + ' ' + totalNote + cardTotal--);
            break;
            case 'Novelty Toilet Paper with Famous Novels':
            console.log(itemNote + ':  ' + proEx + ' ' + totalNote + cardTotal--);
            break;
            case 'Slippery Slippers':
            console.log(itemNote + ':  ' + proEx + ' ' + totalNote + cardTotal--);
            break;
            default:  
            defaultMsg;
            }
            


 /*     2.  If we know we want to have a litany of tests it may be helpful to use Switch statements. Theseare a 
            modified version of if, else if, else statements. As mentioned above we can build the conditional links 
            to be as long as we'd like however there is a simpler way. The switch statement will wait for the 'case' 
            and when it shows it will first the behavior beneath. If there is not a match of input to case then
            the default with fire.                           
 */