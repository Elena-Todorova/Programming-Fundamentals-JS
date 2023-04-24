function piccolo(input) {

    let parking = new Map();

    for (const car of input) {
        let [direction, num] = car.split(", ")
        if(direction === "IN"){
            parking.set(num, direction)
        }
        if(direction === "OUT"){
            parking.delete(num)
        }
        
    }
let sortedPark = Array.from(parking).sort((a,b) => a[0].localeCompare(b[0]))

if(sortedPark.length < 1) {
    console.log("Parking Lot is Empty");
}
sortedPark.forEach(element => {
    console.log(element[0]);
});
    
    
}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])