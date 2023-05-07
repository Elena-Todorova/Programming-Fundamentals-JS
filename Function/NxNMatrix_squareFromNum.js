function matrix(num) {
    let arr = []

    for (let i = 0; i < num; i++) {
        let buff = " "
        for (let j = 0; j < num; j++) {
           buff+= `${num} `
        }
  arr.push(buff)
    }
    console.log(arr.join('\n'));
}

matrix(3)