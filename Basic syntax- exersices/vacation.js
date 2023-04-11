function solve(group, type, day) {

    let price = 0;

    if (type === "Students") {

        if (day === "Friday") {
            price = group * 8.45

        } else if (day === "Saturday") {
            price = group * 9.80

        } else if (day === "Sunday") {
            price = group * 10.46

        }
        if (group >= 30) {
            price = price - price * 0.15
        }
        console.log("Total price: " + price.toFixed(2));

    } else if (type === "Business") {

        if (group >= 100) {
            group -= 10;
        }
        if (day === "Friday") {
            price = group * 10.90

        } else if (day === "Saturday") {
            price = group * 15.60

        } else if (day === "Sunday") {
            price = group * 16
        }

        console.log("Total price: " + price.toFixed(2));

    } else if (type === "Regular") {

        
        if (day === "Friday") { 
            price = group * 15

        } else if (day === "Saturday") {
            price = group * 20

        } else if (day === "Sunday") {
            price = group * 22.50

        }
        if (group >= 10 && group <= 20) {
            price = price - price * 0.05
        }

        console.log("Total price: " + price.toFixed(2));
    }
    }


    solve(30, "Students", "Sunday")
    solve(40, "Regular", "Saturday")
    solve(110, "Business", "Saturday")