function passwordValidator(password) {

    let isValidLength = validLength(password);
    let isValidSymbol = validSymbol(password);
    let isValidTwoNum = checkTwoDigits(password);

    printText(isValidLength, isValidSymbol, isValidTwoNum)



//  The length should be 6 - 10 characters (inclusive)
function validLength(password) {
    return password.length >= 6 && password.length <= 10
}
//It should consist only of letters and digits
function validSymbol(text) {
for (let char of text) {
    let num = char.charCodeAt(0);
    let isNumber = checkIsNumber(num);
    let isUpperChar = checkIsUpperCase(num);
    let isLowerChar = checkIsLowerCase(num);

    if(!isNumber && !isUpperChar && !isLowerChar){
        return false
    }
    
}
return true // put return here because it must check all text 
}
function checkIsNumber(num) {
    return num >= 48 && num <= 57
}
function checkIsUpperCase(num) {
    return num >= 65 && num <= 90
}
function checkIsLowerCase(num) {
    return num >= 97 && num <= 122
}
//It should have at least 2 digits
function checkTwoDigits(text) {
    let counter = 0;
    for (let ch of text) {
       let isNum = checkIsNumber(ch.charCodeAt(0))
       if(isNum) {
        counter++
       }
    }
    return counter >= 2
}

// print text
function printText(isValidLength, isValidSymbol, isValidTwoNum) {
    if(!isValidLength){
        console.log("Password must be between 6 and 10 characters");
    }
    if(!isValidSymbol)   {
        console.log("Password must consist only of letters and digits");
    }
    if(!isValidTwoNum) {
        console.log("Password must have at least 2 digits");
    }
    if(isValidLength && isValidSymbol && isValidTwoNum) {
        console.log("Password is valid");
    }
    }

}
//passwordValidator('logIn')
//console.log("--------------");
//passwordValidator('MyPass123')
//console.log("--------------");
console.log("--------------");
passwordValidator('Pa$s$s')