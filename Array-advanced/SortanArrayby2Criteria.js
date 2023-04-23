function sorting(input) {

  let sortedArr = input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b)
  })
  sortedArr.forEach(element => { //we can use to print every element on new row, it's like a forOf loop
    console.log(element);
  });

}

sorting(['alpha',

  'beta',

  'gamma'])