function sortArray(input) {
    let newArray = []
    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        if (number < 0) {
            newArray.unshift(number)
        } else {
            newArray.push(number)
        }
    }
    console.log(newArray.join("\n"));
}

sortArray(['7', '-2', '8', '9'])
//sortArray(['3', '-2', '0', '-1'])