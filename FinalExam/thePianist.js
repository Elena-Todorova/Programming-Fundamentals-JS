function pianist(input) {

    let number = input.shift();
    let pieces = input.splice(0, number);

    let objPieces = {}

    for (const el of pieces) {
        let [piece, composer, key] = el.split('|');

        objPieces[piece] = {
            composer,
            key,
        }
    }


    let command = input.shift();

    while (command !== 'Stop') {
        command = command.split('|')
        let action = command[0];

        switch (action) {
            case 'Add': {
                let piece = command[1];
                let composer = command[2]
                let key = command[3];

                if (!objPieces.hasOwnProperty(piece)) {
                    objPieces[piece] = {
                        composer,
                        key,
                    }
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
            }
                break;

            case 'Remove': {
                let piece = command[1];

                if (!objPieces.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    delete objPieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                }
            }
                break;
            case 'ChangeKey': {
                let piece = command[1];
                let newKey = command[2];

                if (!objPieces.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    objPieces[piece].key = newKey

                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                }
            }


                break;
        }

        command = input.shift();
    }

    for (const piece in objPieces) {
        console.log(`${piece} -> Composer: ${objPieces[piece].composer}, Key: ${objPieces[piece].key}`);
    }

}

pianist([

    '3',

    'Fur Elise|Beethoven|A Minor',

    'Moonlight Sonata|Beethoven|C# Minor',

    'Clair de Lune|Debussy|C# Minor',

    'Add|Sonata No.2|Chopin|B Minor',

    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',

    'Add|Fur Elise|Beethoven|C# Minor',

    'Remove|Clair de Lune',

    'ChangeKey|Moonlight Sonata|C# Major',

    'Stop'

])