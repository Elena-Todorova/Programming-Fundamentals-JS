function town(towns) {

    let townDirection = {}

    towns.forEach(element => {
        let [town, latitude, longitude] = element.split(" | ")
        
        townDirection.town = town
        townDirection.latitude = Number(latitude).toFixed(2)
        townDirection.longitude = Number(longitude).toFixed(2)

        console.log(townDirection);

    });
    
}

town(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])