function loadingBar(num) {

    let percantageSymbol = "%".repeat(num/10);
    let dotSymbol = ".".repeat(10 - num/10)
    
    if(num === 100) {
        console.log("100% Complete!");
    } else {
    console.log(`${num}% [${percantageSymbol}${dotSymbol}]`);
    console.log("Still loading...");
    }
}

loadingBar(100)