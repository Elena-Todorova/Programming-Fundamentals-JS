function solve(start, end) {

    let sum = 0;
    let buffer = ""

    for (let index = start; index <= end; index++) {
        buffer += index + " "
        
        sum += index;
    }
    console.log(buffer);
    console.log("Sum: " + sum);

}
solve(5, 10)