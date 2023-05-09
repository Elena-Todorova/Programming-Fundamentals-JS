function computerStore(array) {

    let client = array.pop()
    let price = 0;

    for (const el of array) {
        if (el < 0) {
            console.log("Invalid price!");
        } else{
        price += Number(el)
        }
    }
    let tax = (price * 0.2)
    let total = price + tax;
    if (client === "special") {
        total -= total * 0.1
    }
    if (total == 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${total.toFixed(2)}$`);
    }
}
computerStore([

    '1023',
    
    '15',
    
    '-20',
    
    '-5.50',
    
    '450',
    
    '20',
    
    '17.66',
    
    '19.30',
    
    'regular'
    
    ])