function solve(arr, n) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        let currArr = arr[0]
        for (let j = 1; j < arr.length; j++) {
            newArr.push(arr[j])

        }
        newArr.push(currArr)
        arr = newArr;
        newArr = []

    }
    console.log(arr.join(" "));
}
function solve(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.push(arr.shift())
    }}

solve([51, 47, 32, 61, 21], 2)