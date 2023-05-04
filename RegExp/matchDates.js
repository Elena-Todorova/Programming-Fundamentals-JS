function matchDates(input) {

    let patern = /\b(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let text = input.shift();

    let result = text.matchAll(patern);

    for (const match of result) {
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);
    }
    
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])