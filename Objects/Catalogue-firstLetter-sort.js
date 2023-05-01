function catalogue(input) {

    let catalogueObj = {};

    for (const el of input) {
        let [name, price] = el.split(" : ")

        catalogueObj[name] = price;


    }
    let sortedCatalogue = Object.keys(catalogueObj).sort((a, b) => a.localeCompare(b))
    let firstLetter = " "
    for (const el of sortedCatalogue) {
        let letter = el.substring(0, 1)
        if (firstLetter === letter) {
            console.log(`  ${el}: ${catalogueObj[el]}`);
        } else {
            firstLetter = letter;
            console.log(firstLetter);
            console.log(`  ${el}: ${catalogueObj[el]}`);
        }
    }

}

catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])