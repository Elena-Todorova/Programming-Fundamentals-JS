function solve(n) {

for (let i = 1; i <= n; i++) {
    let num = i.toString();
    let sum = 0;
    for (let j = 0; j < num.length; j++) {
       let chart = num[j];
       let chartAsNum = Number(chart);

        sum += chartAsNum
        
    }

    let isSpecial = (sum === 5 || sum === 7 || sum === 11)
    console.log(`${num} -> ${isSpecial ? "True" : "False"}`);
    
}


}

solve(15)