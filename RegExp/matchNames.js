function matchNames(input) {
    
    let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = input.match(patern)

    console.log(result.join(" "));
}

matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")