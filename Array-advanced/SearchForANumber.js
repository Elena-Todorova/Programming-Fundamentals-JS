function search(numbers, actions) {
    
    let numsToTake = actions[0];
    let numsToDel = actions[1];
    let searchNum = actions[2];

    let newArr = numbers.slice(0, numsToTake);
    //console.log(newArr);
    newArr.splice(0, numsToDel)
    //console.log(newArr);

    let counter = 0;

    for (const el of newArr) {
        if(el == searchNum) {
            counter++
        }
    }
    console.log(`Number ${searchNum} occurs ${counter} times.`);

}
search([5, 2, 3, 3, 1, 6],

    [5, 2, 3])