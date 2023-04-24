function miner(input) {

    let mine = {};
    
    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if(!mine.hasOwnProperty(resource)){
        mine[resource] = quantity;
        } else{
            mine[resource] +=quantity;
        }
    }
    for (const key in mine) {
        console.log(`${key} -> ${mine[key]}`);
        
    }
}

miner([

'Gold','155',

'Silver','10',

'Copper','17',
'Gold','155'

])