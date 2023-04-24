function phoneBook(input) {

    let phoneBook = {};

    for (const line of input) {
        let [name, phone] = line.split(" ");
        phoneBook[name] = phone;
        
    }
for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
        
    }

    
    
}
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])