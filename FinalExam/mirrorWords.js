function mirrorWord(input) {

    let pattern = /([@#])(?<word1>[A-Za-z]{3,})(\1)(\1)(?<word2>[A-Za-z]{3,})(\1)/g;
    let count = 0;
    let result = [];

    for (const text of input) {
        let pairs = text.matchAll(pattern);

        for (const pair of pairs) {
            count++
            let leftWord = pair.groups.word1;
            let rightWord = pair.groups.word2;

            let reversedRightWord = rightWord.split('').reverse().join('')

            if (leftWord === reversedRightWord) {
                result.push(`${leftWord} <=> ${rightWord}`)
            }

        }

        if (count <= 0) {
            console.log('No word pairs found!');
        } else {
            console.log(`${count} word pairs found!`);
        }

    }
    if (result.length > 0) {
        console.log(`The mirror words are:`);
        console.log(`${result.join(', ')}`);
    } else {
        console.log('No mirror words!');
    }

}

mirrorWord(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])


// · If there are no mirror words, print: "No mirror words!"

// · If there are mirror words print:

// "The mirror words are:
//{wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo},