function oddOccurrences(stringToCheck) {

    let arr = stringToCheck.toLowerCase().split(" ");

    let words = {};

    for (const word of arr) {

        if (!words[word]) {
            words[word] = 0
        }
        words[word]++

    }
    let result = [];

    for (const word in words) {
        if (words[word] % 2 !== 0) {
            result.push(word)
        }
    }

    console.log(result.join(" "));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')