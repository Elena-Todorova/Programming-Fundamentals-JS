function adAstra(input) {

    let pattern = /([|]|[#])(?<item>[a-zA-Z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<cal>\d+)\1/g;
    let text = input[0];

    let itemInfo = pattern.exec(text);
    let totalCal = 0;

    let buff = '';
  
    while(itemInfo) {
        let item = itemInfo.groups.item;
        let dateItem = itemInfo.groups.date;
        let calories = Number(itemInfo.groups.cal);
        totalCal += calories

        buff += `Item: ${item}, Best before: ${dateItem}, Nutrition: ${calories}\n`;

        itemInfo = pattern.exec(text);
    }

    let days = Math.floor(totalCal / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    console.log(buff);
    
}
adAstra([

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    
    ])