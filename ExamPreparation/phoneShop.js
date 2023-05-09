function phoneShop(input) {
    let list = input.shift().split(", ")

    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let newCommand = command.split(" - ");
        let action = newCommand.shift();

        switch (action) {
            case 'Add':
                
                if(list.includes(`${newCommand}`)){
                    break;
                } else{
                list.push(newCommand) }; break;

            case 'Remove':
                for (let el of list) {
                    if (el == newCommand) {
                        list.splice(list.indexOf(el), 1)
                    }
                }; break;

            case 'Bonus phone':
                let phone = newCommand.shift().split(":")
                let old = phone[0];
                let newPhone = phone[1];

                for (let el of list) {
                    if (el == old) {
                        list.splice(list.indexOf(el) + 1, 0, newPhone)
                    }
                }; break;
            case 'Last': 
            for (let el of list) {
                if (el == newCommand) {
                    let last = list.splice(list.indexOf(el), 1);
                    list.push(last)
                }
            }; break;


        }
        index++
        command = input[index];
    }

    console.log(list.join(", "));


}


phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - HuaweiP10",
    "Add - Motorola",
    "End"])