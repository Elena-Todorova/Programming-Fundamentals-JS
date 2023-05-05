function modernTimes(text) {

    let wordsArr = text.split(' ');
    let newArr = [];

    for (const word of wordsArr) {
        if (word.startsWith('#') && word.length > 1) {
            let isLetter = true;
            let wordCopy = "";
            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    wordCopy += word[i];
                }

            }
            if(isLetter){
                console.log(wordCopy);
            }
            
        }
    }


}

modernTimes('Nowadays everyone uses # to tag a #spe4ial word in #socialMedia')