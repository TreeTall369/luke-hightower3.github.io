/**
 *          STRING MANIPULATION:
 * 
 *     0.   Strings are a crucial part of JavaScript. Strings, like arrays
 *          have indices starting at zer0 large from left to right. We can use for loops to 
 *          take a string and loop through each of it's characters. Each character on the keyboard 
 *          is represented in unicode. There are critical methods help us to manipulate strings. Split 
 *          and join methods are two examples. These allow us to split a string into an array and to 
 *          conversely bring an array of strings together into one string. toLowerCase() and toUpperCase()
 *          are two other examples of method meant for strings. The + operator is also very helpful in 
 *          concatenating strings though the + often needs ' ' around it to make legible sentences. Also
 *          with methods to change strings and find certain info about them there are 'template literals'
 *          which allow a develop an easier way to approach the incorporation of strings with other 
 *          variables.
 */

        let letters = 'abcdef';
        let arrayOfLetters = letters.split('') // [a,b,c,d,e,f]
        let joined = arrayOfLetters.join(''); // abcdefg
        console.log(letters, arrayOfLetters, joined)

        let person = 'lower case man'
        let upper = person.toUpperCase()
        console.log(upper) // LOWER CASE MAN

        let firstName = 'Tony'
        let lastName = 'Tonyson'
        console.log(firstName + ' ' + lastName) // Tony Tonyson

        let greeting = 'Hi, how are you?'
        let sendOff = 'Well, gotta go!'
        console.log(`Leonard! ${greeting} I'm really busy today. ${sendOff}`) // Leonard! Hi how are you? I'm really busy. Well,gotta go!
