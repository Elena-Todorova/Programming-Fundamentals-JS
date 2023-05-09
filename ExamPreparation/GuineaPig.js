function guineaPig(array) {
    
    let totalFood = Number(array[0]) * 1000
    let totalHay = Number(array[1]) * 1000;
    let totalCover = Number(array[2]) * 1000;
    let weight = Number(array[3])* 1000;
    let days = 30

    let foodNeedForMonth = totalFood;
    let hayNeedForMonth = 0;
    let coverNeedForMonth = 0;

    for (let i = 1; i <= days; i++) {
        foodNeedForMonth -= 300;
        if(i % 2 === 0) {
            hayNeedForMonth += (foodNeedForMonth*0.05)
        }
        if( i % 3 === 0) {
            coverNeedForMonth += (weight/3)
        }
    }
    let excessFood = (foodNeedForMonth/1000).toFixed(2);
    let excessHay = ((totalHay - hayNeedForMonth)/1000).toFixed(2);
    let excessCover = ((totalCover - coverNeedForMonth)/1000).toFixed(2);

if(excessFood >= 0 && excessHay >= 0 && excessCover >= 0) {
    console.log(`Everything is fine! Puppy is happy! Food: ${excessFood}, Hay: ${excessHay}, Cover: ${excessCover}.`);
} else {
    console.log(`Merry must go to the pet store!`);
}
}
guineaPig(["10",

"5",

"5.2",

"1"])