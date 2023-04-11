function solve(input) {

    let priceGold = 67.51;
    let totalSum = 0;
    let bitcoin = 0;
    let dayCount = 0;
    let bool = false;
    let firstDay = 0;

    for (let i = 0; i < input.length; i++) {
        dayCount++;
        let digGold = input[i];
        if (dayCount % 3 == 0) {
            digGold = digGold - digGold * 0.30;
        }
        sum = digGold * priceGold;
        totalSum += sum;

        if (totalSum >= 11949.16) {
            let bitCount = Math.floor(totalSum/11949.16)
            bitcoin+= bitCount
            totalSum -= bitCount * 11949.16;
            if (bitcoin >= 1) {
                if(firstDay > 0){
                    continue;
                }

                firstDay = dayCount;
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoin}`);

    if (firstDay >0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}

solve([100, 200, 300])