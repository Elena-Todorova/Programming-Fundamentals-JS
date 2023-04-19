function spice(yield) {

    let totalYield = 0;
    let day = 0;
    let newYield = yield

    for (let i = 0; i < 100; i++) {
        day++;

        let finalY = newYield - 26;
        totalYield += finalY
        newYield -= 10;
        if (newYield < 100) {
            if(newYield >= 26) {
                totalYield -= 26
            } else {
                totalYield -= newYield
            }
            break;
        }
    }
    console.log(day);
    console.log(totalYield);
}


spice(450)