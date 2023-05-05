function cutAndReverse(input) {
    
    let center = input.length/2;
    let firstHalf = input.substring(0,center);
    let secondHalf = input.substring(center);

    
    console.log(firstHalf.split("").reverse().join(""));
    console.log(secondHalf.split("").reverse().join(""));


}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')