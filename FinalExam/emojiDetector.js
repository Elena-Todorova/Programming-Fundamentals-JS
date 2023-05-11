function emoji(input) {

    let text = input.shift();
    let pattarnDig = /\d/g;

    let digits = text.match(pattarnDig);
    let threshold = 1;

    for (const digit of digits) {
        threshold *= digit;
    }
    console.log(threshold);
    

    let pattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g;

    let emojies = text.match(pattern);
    for (const emo of emojies) {
        
        console.log(pattern.groups.name);
    }
}
emoji(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])