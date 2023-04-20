function solve(n, array) {

    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(array[i])

    }
    let output = "";

    for (let y = newArr.length - 1; y >= 0; y--) {
        output += newArr[y] + " "

    }

    console.log(output);
}
solve(4, [-1, 20, 99, 5])