function dictionary(termsInJson) {

let objectTerms = {};

    for (const str of termsInJson) {

        let obj = JSON.parse(str)
        let keys = Object.keys(obj);
        let key = keys[0]
        objectTerms[key] = obj[key]

    }
    let sortedObject = Object.keys(objectTerms).sort((a,b) => a.localeCompare(b));

    for (const key of sortedObject) {
        console.log(`Term: ${key} => Definition: ${objectTerms[key]}`);
        
    }

}

dictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',
    '{"Bus":"A large motor vehiclecarrying passengers by road,typically one serving the publicon a fixed route and for afare."}',
    '{"Boiler":"A fuel-burningapparatus or container forheating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold  or fasten something."}',
    '{"Microphone":"An instrument  for converting sound waves into  electrical energy variations  which may then be amplified,  transmitted, or recorded."}'

])