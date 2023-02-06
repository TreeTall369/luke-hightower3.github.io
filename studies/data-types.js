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
 *                  NAN         
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

 /*    1.  Numbers
 *                  
 * 
 * 
 * 
 * 
 */

 


 /**   2.  Boolean
 *    
 * 
 * 
 *     
 * 
 */




/**    3.  String
 *    
 * 
 * 
 *     
 * 
 */




/**    4.  Array
 *    
 * 
 * 
 *     
 * 
 */






/**    5.  Object
 *    
 * 
 * 
 *     
 * 
 */




/**    6.  Function
 *    
 * 
 * 
 *     
 * 
 */




/**     7.   Undefined
 *    
 * 
 * 
 *     
 * 
 */




/**     8.   Null
 *    
 * 
 * 
 *     
 * 
 */



/**     9.   Nan
 *    
 * 
 * 
 *     
 * 
 */




/**     10.   Infinity and -Infinity
 *    
 * 
 * 
 *     
 * 
 */




