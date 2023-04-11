function solve(n) {
    
    for (let row = 1; row <= n; row++) {
        let buff = ""
        for (let col = 0; col < row; col++){
        buff += row + " "
        
        } 
        console.log(buff);  
    }
    
}

solve(3)