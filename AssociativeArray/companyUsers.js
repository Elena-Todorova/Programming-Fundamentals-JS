function companyUsers(input) {

    let company = {};

    for (const line of input) {
        let [companyName, user] = line.split(" -> ");
        if (!company.hasOwnProperty(companyName)) {
            company[companyName] = [];
        }
        company[companyName].push(user);

    }

    let sorted = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]))

    for (const companyInfo of sorted) {
        const companyName = companyInfo[0];
        const allUsers = companyInfo[1];

        console.log(companyName);

        let uniqueUser = new Set(allUsers);
        for (const user of uniqueUser) {
            console.log(`-- ${user}`);
        }


    }

}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111', 'SoftUni -> AA33345'])