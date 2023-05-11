function dictionary(input) {

    let notebook = input.shift().split(' | ');
    let notebookObj = {};

    for (const note of notebook) {
        let [word, definition] = note.split(': ');

        if (!notebookObj.hasOwnProperty(word)) {
            notebookObj[word] = [];
            notebookObj[word].push(definition);
        } else {
            notebookObj[word].push(definition);
        }
    }

    let testWords = input.shift().split(' | ');
    let command = input.shift()

    switch (command) {
        case 'Test':
            for (const word of testWords) {
                if (notebookObj.hasOwnProperty(word)) {
                    console.log(word + ':');
                    console.log(` -${notebookObj[word].join('\n -')}`);
                }
            }
            break;

        case 'Hand Over':
            let keys = Object.keys(notebookObj);
                console.log(keys.join(' '));
            break;
    }

}

dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",

    "fish | domino",

    "Hand Over"])

console.log('----------------');

dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",

    "care | kitchen | flower",

    "Test"])
console.log('----------------');
dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: zmake determined efforts to deal with a problem | bit: a short time or distance",

    "bit | code | tackle",

    "Test"])