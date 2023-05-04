function furniture(input) {

    let patern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;

    let index = 0;
    let totalMoney = 0;
    console.log('Bought furniture:');

    while (input[index] !== 'Purchase') {
        let furniture = input[index];
        let validFurniture = patern.exec(furniture)

        while (validFurniture !== null) {
            console.log(validFurniture.groups.name);
            const price = validFurniture.groups.price;
            const quantity = validFurniture.groups.quantity;

            totalMoney += price * quantity

            validFurniture = patern.exec(furniture)
        }
        index++
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase'])