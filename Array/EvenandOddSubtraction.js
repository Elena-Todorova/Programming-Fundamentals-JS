function evenOrOdd(numbers) {
    
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = Number(numbers[i]);
        if (num % 2 === 0) {
            sumEven += num
        }else {
            sumOdd += num
        }
    }
    console.log(sumEven - sumOdd);  

}
evenOrOdd([3,5,7,9])