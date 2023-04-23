function sorting(input) {
input.sort((a,b) => b - a);
let newArray = [];

while(input.length > 0) {
let bigNum = input.shift();
newArray.push(bigNum);
let smallNum = input.pop();
newArray.push(smallNum);

}

console.log(newArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
console.log("94 1 69 2 63 3 52 18 31 21");