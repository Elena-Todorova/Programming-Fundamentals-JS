function travel(input) {
    
    let country = {};

    for (const line of input) {
        let [countryName, town, price] = line.split(" > ");
        price = Number(price);

        if(!country.hasOwnProperty(countryName)) {
            country[countryName] = {};
        }
        if(!country[countryName].hasOwnProperty(town)) {
            country[countryName][town] = price;
        }
        if(country[countryName][town] > price) {
            country[countryName][town] = price
        }
        
    }
    let sortedCountries = Object.keys(country).sort((a,b) => a.localeCompare(b))
    console.table(sortedCountries);
}

travel([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ])