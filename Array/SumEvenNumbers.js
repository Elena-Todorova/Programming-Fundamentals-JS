function sumEven(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = Number(numbers[i]);
        if (num % 2 === 0) {
            sum += num
        }
    }
    console.log(sum);
}
sumEven(['2','4','6','8','10'])