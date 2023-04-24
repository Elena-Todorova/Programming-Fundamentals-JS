function cardGame(input) {

    let players = new Map()

    let cardPowerEnum = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,

    }

    let cardsTypeEnum = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }
    for (const line of input) {
        let [playerName, cards] = line.split(": ");
       
        if(!players.has(playerName)){
            players.set(playerName, new Set())
        }
        cardsArr = cards.split(", ");
        for (const card of cardsArr) {
            players.get(playerName).add(card)
            
        }
    }

    for (const playerInfo of Array.from(players)) {
        sum = 0;
        for (const card of Array.from(playerInfo[1])) {
            let cardInfo = card.split("");
            let powerAsStr = cardInfo.splice(0,cardInfo.length - 1).join("");
            let typeAsStr = cardInfo[cardInfo.length-1];
            let power = cardPowerEnum[powerAsStr];
            let type = cardsTypeEnum[typeAsStr];

            sum += power * type
            
        }
        console.log(playerInfo[0] + ": " + sum);
    }
    
}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])