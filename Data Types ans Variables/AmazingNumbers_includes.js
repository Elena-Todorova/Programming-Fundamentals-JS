function solve(number) {
    number = number.toString();
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
        
    }
    let result = sum.toString().includes("9")

    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False` );
}
solve(1233)
solve(999)