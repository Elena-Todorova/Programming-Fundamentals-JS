function revealWords(words, text) {
    
let wordsArr = words.split(', ');

for (const word of wordsArr) {

    let template = '*'.repeat(word.length);
    text = text.replace(template, word)
    
}

console.log(text);

}

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages')