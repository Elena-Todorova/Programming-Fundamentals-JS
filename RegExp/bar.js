function bar(input) {
    
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^0-9|$%.]*(?<price>\d+[\.]*\d+)\$/g;

    let total = 0;
    let command = input.shift();

    while (command !== 'end of shift' ) {

        let line = pattern.exec(command)
        
        if(line) {

            let customer = line.groups.customer;
            let product = line.groups.product;
            let count = Number(line.groups.count);
            let price = Number(line.groups.price);

            let totalPrice = count * price

            total += totalPrice

            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);

            line = pattern.exec(command)
        }

        command = input.shift();
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

bar(['%George%<Croissant>|2|10.3$',

'%Maria%<Cola>|1|2.4$',

'%Peter%<Gum>|1|1.3$',

'end of shift'])

