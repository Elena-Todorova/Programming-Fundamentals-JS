function solve(num) {
    let num1 = num.toString()
    let sum = 0;
    
    for (let i = 0; i < num1.length; i++) {
        let num2 = num1[i]
        let numToNum = Number(num2);
        sum += numToNum
      
        
    }
    console.log(sum);
}
solve(543)
solve(245678)
solve(97561)