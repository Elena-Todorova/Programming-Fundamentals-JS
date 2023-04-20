function solve(side, height) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let row = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = side; i > 0; i -= 2) {

        //  console.log(i);
        row++;
        if (side == 1 || side == 2) {
            gold = side * side;
            break;
        }
        let outerLiner = side * 3 + side - 4;
        if (row % 5 == 0) {
            lapisLazuli += outerLiner
        } else {
            marble += outerLiner
        }

        let currStone = side * side - outerLiner;
        stone += currStone;

        // console.log(currStone);
        side -= 2;


    }
    console.log(`Stone required: ${Math.ceil(stone * height)}`);
    console.log(`Marble required: ${Math.ceil(marble * height)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * height)}`);
    console.log(`Gold required: ${Math.ceil(gold * height)}`);
    console.log(`Final pyramid height: ${Math.floor(row*height)}`);
}
solve(12, 1)