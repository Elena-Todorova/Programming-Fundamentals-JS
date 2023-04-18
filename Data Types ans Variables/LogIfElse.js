function solve(text, char, textToMatch) {
    let newText = ""
    for (let i = 0; i < text.length; i++) {
      if(text[i] === "_") {
newText += char
      } else {
newText += text[i]
      }
        
    }
    console.log(newText === textToMatch ? "Matched" : "Not Matched");
}
solve('Str_ng', 'I','Strong')
solve('Str_ng', 'i','String')