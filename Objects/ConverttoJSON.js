function convert(fName, lName, hair) {

    let person = {
        name : fName,
        lastName : lName,
        hairColor : hair,
    }

    let personJ = JSON.stringify(person)

    console.log(personJ);
    
}
convert('George', 'Jones',

'Brown')