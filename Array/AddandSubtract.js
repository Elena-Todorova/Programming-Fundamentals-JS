function solve(arr) {
    let newArr = []
    let sum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);
        sum += element
        if (element % 2 == 0) {
            element += i
            newSum += element
        } else {
            element -= i;
            newSum += element
        }
        newArr.push(element)
    }
    console.log(newArr);
    console.log(sum);
    console.log(newSum);
}

solve([5, 15, 23, 56, 35])