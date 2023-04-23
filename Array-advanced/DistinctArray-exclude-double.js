function distinctArray(numbers) {
    
    let uniqArray = [];

    for (const el of numbers) {
        //if(uniqArray.indexOf(el) === -1) {
            if(!uniqArray.includes(el)) {
            uniqArray.push(el)
        }
    }
    console.log(uniqArray.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2])