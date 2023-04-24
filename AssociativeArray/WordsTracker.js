function wordsTracker(input) {

    let wordObject = {};
    
    let words = input.shift().split(" ");

    for (const word of words) {
        wordObject[word] = 0
        
    }

    for (const word of input) {
        if(wordObject.hasOwnProperty(word)){
            wordObject[word]++
        }
    }

    let sorted = Object.entries(wordObject).sort((a,b) => b[1] - a[1])

   
    for (const [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
   
}

wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])