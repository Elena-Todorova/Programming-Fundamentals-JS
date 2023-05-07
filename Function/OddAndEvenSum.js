function oddAndEvenSum(num) {

    let stringFromNum = String(num);
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < stringFromNum.length; i++) {
        let numFromString = Number(stringFromNum[i]);
        if (numFromString % 2 === 0) {
            sumEven += numFromString
        } else {
            sumOdd += numFromString
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(1000435)