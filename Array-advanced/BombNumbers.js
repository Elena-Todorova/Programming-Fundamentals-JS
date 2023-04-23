function bombNumbers(numbers, specialNum) {

    let bombNum = specialNum[0]
    let power = specialNum[1]

    for (const el of numbers) {
        if (el == bombNum) {
            let bombIndex = numbers.indexOf(el) - power;
            if(bombIndex < 0) {
                bombIndex = 0
            }
            let bombDetonation = power * 2 + 1
            numbers.splice(bombIndex, bombDetonation)
        }
    }
    let sum = numbers.reduce((a, b) => a + b, 0)

    console.log(sum);
}

bombNumbers([1, 7, 2, 2, 7, 1, 2, 3],

    [7, 2])