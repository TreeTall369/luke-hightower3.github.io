// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an object that has arguments as keys and values
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    } 
    
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // assign literal array to contacts variable
    var contacts = [];
    

    // we need to return an object 
    return {
        // we implemented the length api for you //
        length: function() {return contacts.length;},
        // create key called addContact - declare function that returns contact pushed into array
        addContact: function(contact){ return contacts.push(contact)},
        // key findContact - declare function that takes in string of fullName
        findContact: function(fullName){
                // loop over contacts array 
            for (let index = 0; index < contacts.length; index++){
                    // test with bracket and dot notation
                if (fullName === contacts[index].nameFirst + ' ' + contacts[index].nameLast){
                    // if equal return that cotnact
                    return contacts[index]
                } 
                    // if not true return undefined
                return undefined
            }
        },
            // removed contact key -- declare funtion 
        removeContact: function(contact){ 
            // loop over contacts array
            for (let index = 0; index < contacts.length; index++){
                // compare contact with data in contacts array, braket notation
                if (contact === contacts[index]){
                    // use splice to remove that item in array .splice(start-point, # of items to remove)
                    return contacts.splice(index, 1)
                } 
            }
        } ,
        // print contact key - function 
        printAllContactNames: function(){
            // open array
            let nameList = []
                // loop over contacts array
            for (let index = 0; index < contacts.length; index++){
                    // push names into nameList array 
                nameList.push(contacts[index].nameFirst + ' ' + contacts[index].nameLast)
            }
            // join the array with '\n' to create new lines at each entry
            return nameList.join('\n')
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
