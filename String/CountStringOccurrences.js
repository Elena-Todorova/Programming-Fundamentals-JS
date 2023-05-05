function countStrings(text, word) {

    let words = text.split(" ");
    let counter  = 0;

    for (const el of words) {
        if(el === word) {
            counter++
        }
    }

    console.log(counter);
    


//second version

let count = text.split(" ").filter(x => x === word).length;
console.log(count);

}
countStrings('This is a word and it also is a sentence',

'is')