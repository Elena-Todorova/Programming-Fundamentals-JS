function marge(arr1, arr2) {

    let arr3 = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let firstEl = arr1[i];
        let secondEl = arr2[i];

        if (i % 2 == 0) {
            firstEl = Number(firstEl);
            secondEl = Number(secondEl);
        }

        let result = firstEl + secondEl;
        arr3.push(result)
    }
    
    console.log(arr3.join(" - "));
}

marge (['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])