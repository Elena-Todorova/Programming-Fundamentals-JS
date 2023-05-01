function inventory(list) {
    
    let heroes = [];

    list.forEach(line => {
        let [name, level, items] = line.split(" / ");
        let hero = {
            name,               // name:name, we can write only name, because the key and the value are the same
            level:Number(level),
            items,             //items:items
        }
        heroes.push(hero)
    });

    heroes.sort((a,b) => a.level - b.level)

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
        
    });

}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])