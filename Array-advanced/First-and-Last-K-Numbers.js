function kNumbers(input) {
    let counter = Number(input.shift());

    let firstRow = input.slice(0, counter);
    let secondRow = input.slice(input.length - counter);

    console.log(firstRow.join(" "));
    console.log(secondRow.join(" "));
}
kNumbers([2, 7, 8, 9])
kNumbers([3, 6, 7, 8, 9])