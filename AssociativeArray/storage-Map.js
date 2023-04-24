function storage(input) {

    let newStorage = new Map();

    for (const line of input) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity)
        if (newStorage.has(product)) {
            quantity += newStorage.get(product)
        }

        newStorage.set(product, quantity)
    }

    for (const [product, quantity] of newStorage) {
        console.log(`${product} -> ${quantity}`);

    }
}

storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40'])