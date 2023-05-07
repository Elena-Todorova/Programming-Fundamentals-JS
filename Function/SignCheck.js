function signCheck(num1, num2, num3) {
    
    let sum = sumNum(num1, num2)
    let sum2 = sumNum(sum, num3)

    if(sum2 > 0) {

        console.log('Positive');
    
    } else {
console.log('Negative');
    }
   function sumNum(a, b) {
    return a * b
   }
   
    
}

signCheck(5,   12,   -15)