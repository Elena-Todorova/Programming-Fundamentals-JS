function palindrome(array) {
    for (let i = 0; i < array.length; i++) {
        let stringFromNum = String(array[i]);
        let newArray = "";
        for (let j = stringFromNum.length - 1; j >= 0; j--) {
           newArray += stringFromNum[j]    
                  
        }
 
        console.log(newArray === stringFromNum);
    }

}

palindrome([123,323,421,121])