function equalSum(arr) {

    let index = "no"

    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let j = 0; j < i; j++) { //calc left sum
           sumLeft += arr[j]
        }
        for (let k = i+1; k < arr.length; k++) { //calc right sum
            sumRight += arr[k]
        }
        if (sumLeft === sumRight) {
            index = i
        }
    }
    console.log(index);
    
}

equalSum([1, 2]) 