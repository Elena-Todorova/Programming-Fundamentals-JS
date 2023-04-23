function sumOfElementsBefore(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sequence = result.slice(-k);
        let sum = 0;
        for (el of sequence) {
            sum += el
        }
        result.push(sum)
    }
    console.log(result.join(" "));
}
sumOfElementsBefore(6, 3)