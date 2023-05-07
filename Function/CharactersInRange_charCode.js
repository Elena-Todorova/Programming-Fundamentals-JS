function charactersInRange(charA, charB) {
  
    let numFromCharA = convertFromCharToNum(charA);
    let numFromCharB = convertFromCharToNum(charB);

    let startIndex = Math.min(numFromCharA, numFromCharB);
    let endIndex = Math.max(numFromCharA, numFromCharB);

    let buff = ' '

    for (let i = startIndex + 1; i < endIndex; i++) {
 buff += String.fromCharCode(i) + " "
        
    }
    console.log(buff);
    
    function convertFromCharToNum(char) {
        return char.charCodeAt(0)
    }
}

charactersInRange('a',

'd')