function processOddNumbers(numbers) {
    
    console.log(numbers
    .filter( (n, i)  => i % 2!== 0)
    .map(x => x*2)
    .reverse());
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])