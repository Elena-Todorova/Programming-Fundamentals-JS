function factorial(num1, num2) {

let result = multiply(num1) / multiply(num2);
console.log(result.toFixed(2));

    function multiply(num) {
        let firstFactorial = 1;
        for (let i = num; i > 1; i -= 2) {
            firstFactorial *= i * (i - 1)
        }
        return firstFactorial
    }


}
factorial(6, 2)