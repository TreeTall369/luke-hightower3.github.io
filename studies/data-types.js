/**
 *          DATA TYPES: 
 *          
 *    0.    The way we use the word data can be tricky. To be precise about the word referring to information
 *          data are collections of datum. Some data is a collection of these collections. Types of data, and 
 *          the nuances of their differences is very important! To begin, a list of 
 *          data types: 
 * 
 *                  numbers 
 *                  boolean 
 *                  string 
 *                  array  
 *                  object  
 *                  function  
 *                  undefined 
 *                  null 
 *                  NaN         
 *                  Infinity  
 *                  -Infinity
 * 
 *          Primitive Datatypes are simple, ie they have single piece of datum. They are not collections
 *          and thus will copy value. 
 * 
 *          Complex Datatypes are multitudinous in their being. Complex data included collections and 
 *          functions and thus copy by reference instead of value. 
 * 
 *          To copy by value we can use the spread opertator which creates a shallow copy;
 *          Copy by reference is when a collection = a and then we say that now x = a and thus 
 *          by reference equals the collection. This refers to the data and does not create a shallow
 *          copy.
 */          

        let abc = {1: 'a', 2: 'b', 3: 'c'}
        let xyz = {...abc}
        console.log(xyz) // this is copy by value and will log the new object

        let lmo = abc;
        console.log(lmo) // this is copy by reference and does not create a shallow copy

 /**    1.  Numbers -   In JS numbers function just like they would in any number-line. Numbers apply to 
  *                     to all mathmatical operators which we cover later. At times we'll receive numbers
  *                     in string form and we'll need to make sure they are dealt with accordingly. JS
  *                     also has a litany of methods using Math.
 */

      let numbers = 42;
      let negNumbers = numbers - 50;
      console.log(numbers, negNumbers)

 /**   2.  Boolean -    Boolean refers to True and False values. Many functions are contingent upon 
  *                     specific things being true or false. This creates control flow or switches to 
  *                     help shape your code. Other data is also at times considered 'truthy' or 
  *                     'falsey' This will also be critical. 
 *    
 *                      'Falsey' expressions include: false, 0, -0, '', null, undefined, NaN
 *                      All other expressions are truthy. This can help keep our code concise. 
 */
       let labA = 1 
       let truthy;
       if(labA){ 
        truthy = true
       } 
       console.log(truthy)


       let falsey;
       let labB = 0; //  we can check other examples of falsey too : labB = -0; labB = ''; labB = null; labB = undefined; labB = NaN;
       if (labB === false){
        x = false      
       }
       console.log(falsey)

/**    3.  String       Strings are characters. These are essentially letters, numbers and punctuation in
 *                      character form. Each key on the keyboard has a unicode equivalent which creates the
 *                      certain character. Strings are opened like arrays and objects. We open strings with 
 *                      single or double quotes ' words goes here '. Each character between the quotes is 
 *                      accounted for, including spaces. Strings are also indexed beginning at 0. Each char
 *                      has a unicode and an index#.
 */

       let sampleString = 'abc'
       let sampleConcat = sampleString + 'efg'
       console.log(sampleConcat)


/**    4.  Array        Arrays are indexed collecions. The array is opened with brackets [a,b,c]. Each item
 *                      in the array is separated by a comma. There are several methods to manipulate arrays
 *                      in a wide variety of ways, add, subtracting items from arrays, showing portions or 
 *                      reducing values to one value are all possilbe. The array is a collection and thus 
 *                      an example of complex data.
 */

       let literalArray = []
       literalArray.push('string', 42, true)
       console.log(literalArray);
       console.log(literalArray[0])


/**    5.  Object       Just like array Objects are collections of data. The main difference is they are not ordered
 *                      by an index but rather by key/value pairs. An object will have a key: followed by the value. 
 *                   We can access these keys and objects with dot and bracket notation. Dot notation will assist 
 *                   when we know the name of the key. Object.key will access the value at that key/value pair. We     
 *                   also use for-in loops with the a variable (often times key) to access the key and value with 
 *                   bracket notation to resolve the key to a string: Object[key] = value. All keys are strings. We 
 *                   also declare an object and add to it with the assigment opertator. There are also a number of 
 *                   methods specially designed for objects. 
 */
       let object = {}
       object.sampleKey = 42;
       console.log(object)
       console.log(object['sampleKey'])

/**    6.  Function  A function is an essential data type. A function is a statement that is declared then invoked. 
 *                   Within JS functions are also objects though we can determine its datatpye with the typeof 
 *                   operator. Functions can declared a number of ways. They will not do anything however until they
 *                   are invoked. Once invoked a function is no longer a statement but an expression. This does not
 *                   mean that it will always have an output. 
 */
       let challenge = function(a){
              return a
       }
       let results = (a, b) => {a * b}
       let solution = element => 'Thanks for everything ' + element;
       console.log(challenge(42), results(6, 7), solution('Homer Simpson'))

/**    7.  Undefined        This is a falsey data type. Undefined will show us that whatever we are looking for does not 
 *                          have a value. A function with no return will do this. Or a variable that has been declared with
 *                          no assignment will also log as undefined. Undefined can be helpful in our control flow testing
 *                          for edge cases and so forth.
 */
       let logFunc = (element) => {console.log(element)}
       console.log(logFunc('hey')) // this will log undefined b/c function does have return, just a behavior.

/**     8.   Null           Null is an object that is falsey. Null gives us an option for linking lists and having a base
 *                          case to end the recursion. Null is different than unefined b/c it is value however it's also not
 *                          a zero and doesnt follow math rules in that regard.
 */
              let link = {  node: 1,
                            rest: {  node: 2,
                                   rest: {  node: 3,
                                          rest: {  node: 4,
                                                 rest: {  node: 5,
                                                        rest: null }}}}}


/**     9.   NaN            This will appear when we are looking for a number and the data is not a number. Trying to perform 
 *                          math operations on strings will do this for example. NaN is a property of the global object. 
 */
              let answer = isNan('3.14')
                    console.log(answer) // since '3.14' is a string in this context this will log true                                    


/**     10.   Infinity and -Infinity      This is an object representing infinity. Similarly negative infinity represents infinity 
 *                                        as though it were going toward negative numbers. Infinity itself is a conceptual impasse
 *                                        and trying to create it in a finite way (ie in JS) requires this representation. There are 
 *                                        anomolies that bring about infinity and -infinity that are physically irrational.
 */                                     



