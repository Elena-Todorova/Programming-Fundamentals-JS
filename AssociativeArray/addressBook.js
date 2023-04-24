function addressBook(input) {

    let addressBookArr = {};

    for (const line of input) {
        let [name, address] = line.split(":");
        addressBookArr[name] = address
    }

    let sortedAddressBook = Object.entries(addressBookArr).sort((keyA, keyB) => keyA[0].localeCompare(keyB[0]));

    
    for (const el of sortedAddressBook) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
    

    
}
addressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])