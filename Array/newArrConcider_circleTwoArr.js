function solve(nums) {
let currArr = nums 

    while(currArr.length > 1) {

    let newArr = [];

    for (let i = 0; i < currArr.length - 1; i++) {
       let firstEl = currArr[i];
       let secondEl = currArr[i + 1]
        
       newArr.push(firstEl + secondEl)
    }
    currArr = newArr
}
    console.log(currArr[0]);
}

solve([2,10,3])