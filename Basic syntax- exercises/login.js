function solve(input) {
    let username = input[0];
    let password = "";

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
let wrongPass = 0;
    for (let y = 1; y <= input.length - 1; y++) {
        let currPassword = input[y];
        if (currPassword == password) {
            console.log(`User ${username} logged in.`);
        } else {
            wrongPass++;
            if(wrongPass == 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
            
        }
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA'])
console.log("------------");
solve(['momo','omom'])
console.log("-----------");
solve(['sunny','rainy','cloudy','sunny','notsunny'])