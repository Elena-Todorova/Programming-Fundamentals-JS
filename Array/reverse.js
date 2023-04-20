function reverse(charts) {
    
    for (let i = 0; i < charts.length / 2; i++) {
        let tempEl = charts[i]; // save the First element

        charts[i] = charts[charts.length - 1 - i]; // replace firts element with the last one(we put -i in order everytime to reduce the number with one)
        charts[charts.length - 1 - i]     = tempEl    // replace the last element with tempEl(when we save the first)
    }
    console.log(charts.join(" "));
}

reverse(['a', 'b', 'c', 'd', 'e'])