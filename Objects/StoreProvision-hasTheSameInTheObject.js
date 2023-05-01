function storeProvision(current, ordered) {

    const store = {};
    

    for (let i = 0; i < current.length; i += 2) {
        const currentProduct = current[i];
        store[currentProduct] = Number(current[i + 1])
    }
    for (let i = 0; i < ordered.length; i += 2) {
        const currentProduct = ordered[i];
        if(!store.hasOwnProperty(currentProduct)) {
            store[currentProduct] = 0;
        }
        store[currentProduct] += Number(ordered[i + 1]
        )
    }
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    
    }
    
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])