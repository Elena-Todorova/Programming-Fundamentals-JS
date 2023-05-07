function orders(product, quantity) {
    let price = 0;
    let result = 0;
    switch (product) {
        case "coffee": price = 1.50; break;
        case "water": price = 1.00; break;
        case "coke": price = 1.40; break;
        case "snacks": price = 2.00; break;
    
         result = (quantity * price).toFixed(2);
    }
    result = (quantity * price).toFixed(2);
    console.log(result);
}
orders("water", 5)
