function partyTime(input) {

    let guestsList = [];

    while (input[0] !== 'PARTY') {
        let currentGuest = input.shift();
        guestsList.push(currentGuest)

    }
    input.shift()
    let guests = input;
    


    for (const guest of guests) {
        if(guestsList.includes(guest)) {
            guestsList.splice(guestsList.indexOf(guest),1)
        }
        
    }
    let sorted = guestsList.sort((a,b) => a-b)
    console.log(guestsList.length);
    sorted.forEach(element => {console.log(element);});


}
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])