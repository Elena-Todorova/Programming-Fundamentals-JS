function maxNum(nums) {

    let newArr = []

    for (i = 0; i < nums.length; i++) {
        let isBigger = true;
        let currNum = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (currNum <= nums[j]) {
                isBigger = false;
            }

        }
        if (isBigger) {
            newArr.push(nums[i])
        }
    }
    console.log(newArr.join(" "));
}


maxNum([1, 4, 3, 2])
