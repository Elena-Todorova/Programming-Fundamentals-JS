function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let armorNum = 0;

    for (let i = 1; i <= lostFights; i++) {
        let lostFightNum = i;

        if (lostFightNum % 2 === 0) {
            expenses += helmetPrice
        }
        if (lostFightNum % 3 === 0) {
            expenses += swordPrice
        }
        if (lostFightNum % 3 === 0 && lostFightNum % 2 === 0) {
            expenses += shieldPrice;
            armorNum++
        
        if(armorNum % 2 === 0 && armorNum !== 0) {
            expenses += armorPrice
        }
    }
}
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiator(23,

    12.50,
    
    21.50,
    
    40,
    
    200)