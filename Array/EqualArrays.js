function equal(arr1, arr2) {

    let sum = 0;
    
    for (let i = 0; i < arr1.length; i++) {
      let element1 = Number(arr1[i])
        sum += element1
    }
     for (let y = 0; y < arr2.length; y++) {
      let element2 = Number(arr2[y])
        
    }
    if (arr1[i] === arr2[y]) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}


equal(['10','20','30'],

['10','20','30'])