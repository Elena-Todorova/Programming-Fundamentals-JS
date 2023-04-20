function solve(day) {
    let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if(day >= 1 && day <= 7) {
        console.log(weekdays[day-1]);
    } else {
        console.log("Invalid day!");
    }
}
solve(6)