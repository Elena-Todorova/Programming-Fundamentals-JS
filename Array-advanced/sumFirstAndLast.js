function sumElements(numbers) {
    let firstEl = Number(numbers[0]);
    let lastEl = Number(numbers.pop());

    console.log(firstEl + lastEl);
}

sumElements(['20', '30', '40'])