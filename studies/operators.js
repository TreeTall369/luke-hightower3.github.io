/**
 *          OPERATORS:
 * 
 *          Operators are links by which connect variables. In a metaphorical sense, Operators are conjunctions that 
 *          bring together each piece of the language to form a conherent thought. Without conjuctions no sense could 
 *          be made at all. Operators are categorized based on their purpose. We'll thorouhly describe and exemplify 
 *          each of them. 
 * 
 *      0.  Assignment Operators: 
 * 
 *          The = sign is the seminal assignment operator. This differs greatly from == and ===. The = can 
 *          follow a plus += as such minus -= and *=, =/, **= etc. The function the assignment operator is 
 *          extending the 'point to' effect as mention above. We'll assign variables to expressions throughout our
 *          code to bring about our intention.        
 */
            let string = ''
            string += 'abc'
            console.log(string)


 /*      1.  Arithmetic Operators:
 * 
 *          As is evident in their name the arithmetic operators are for mathmatical purposes. Most are familiar +, -, /, * 
 *          However some ar orignal to JavaScript. Like modulus opertaor % which when placed between to number will return
 *          the remainer as a whole number. The carrot ^ functions to indicate an exponent. And do remember the = sign 
 *          will not be neccessary to return a value like writing our math problems. There are other mathmatical elements
 *          in JavaScript eg math.Random(), parseFloat() etc.. It's important to notice the extent of math within 
 *          JavaScript and how it is represented differtly than common mathmatics.    
 */
            let mathSum = 42 + 365 // simple addtion
            let wordSum = 'Well then,' + ' come on in!' // this concatenates words
            let modulus = 42 % 8 // 2 --- 8 goes into 42 5 times, with a remainder of 2

            console.log(mathSum, wordSum, modulus)

 /*      2.  Comparison Operators:
 * 
 *          Comparisons are made in JavaScript like the words: 'is equal' and 'greater' and 'lesser than' are used
 *          in conversation. Though this with much greater specificity. Operators == and ===. Signfy values being the same.
 *          The === reprensently being strictly equal to, ie each character. The == provides a more inclusive equality where
 *          numbers and string representations of number are equal. The < > are used as one would prdeicr with number
 *          values simiarly with <= and >=. These operator have itnering usefulness when applied to strings and to boolean
 *          values. True is greater than False. An letter have numerical representation used to alphabetize them with 
 *          special method. Essentially the < > Operators have several other uses beyond numbers. Lastly the bang operator
 *          is another key tool. !== and != both mean the opposite of ther predecessor. Not equal, stricly, loosely. 
 */

            console.log('1' === 1) // false
            console.log('1' == 1); // true
            console.log(1 >= 10, 1 <= 10) // false, true
            console.log(10 !== 11, 10 === 11) // true, false

 /*      3.  Logical Operators:
 * 
 *          Logical Operators, this operators work within conditional statements ie if, else if, else... statements.
 *          These operators include the && double ampersand to mean A &&(and) B are yada yada yada. Both this to be true
 *          both values A,B must be in agreement. For example if A && B are numbers above 10... If they are indeed above
 *          ten this expression is true. Otherwise if A is 9 or lower it will not be true. If we want code that will be 
 *          more inclusive and say that A or B can be something we'll use the || or opertar. A || B can be above ten 
 *          for our conditional statement to express true. Lastly, there is ! which like above signfies not being equal. 
 *          An example of this is if (!varExample){ varExample++ }. The condition is the variables negation which could
 *          be the product of another function or expression. 
 * 
 */

            if (42 > 25 && 'abc' !== 'efg'){
                console.log('the first AND second test pass')
            }

            if (42 > 25 || 'xyz' !== '789'){
                console.log('one of these test is passing')
            }


 /*      4.  Unary Operators:
 * 
 *          Unary Operators are refering to single variable operations. Simply the operand and one variable. Examples 
 *          of these include +varExample and -varExample, which will turn the value into a number or its negative, or typeof varExample, which will 
 *          return a string of the type of value (with some exceptions). Others are instanceof and !
 */ 
            
            let x = 'string'
            console.log(typeof x) // 'string'

            function Car(make, model, year) {
                this.make = make;
                this.model = model;
                this.year = year;
              }
            let whip = new Car('vw', 'jetta', 2017)
            console.log( whip instanceof Car) // true 

            let y = 100;
            // let y;
            if (!y){
                console.log('where is y')
            } else {
                console.log('y is right there')
            }


 /*      5.  Ternary Operator:
 * 
 *          The Ternary Operator is also under the umbrella of comparison operators. This is best explained by reading
 *          out the syntax, A ? B : C. Out loud so-to-speak, this is If A is true do B, if false do C. Using the ternary
 *          will having a condtion A (eg. age >= 21) followed by to outcomes B ('may enter the bar') and : C ('not allowed inside')
 *          If the age being equal or above 21 is true the value of the expression will be whatever is first, if false then what 
 *          then the second outcome will be the value. 
 */

 let info = ['first,', 'second', 'third', 'fourth'];

 info.length >= 1 ? console.log('we have info') : console.log('we do not have info')