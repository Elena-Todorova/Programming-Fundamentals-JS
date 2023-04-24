function schoolGrades(input) {

    let studentObj = {};

    for (const el of input) {
        let student = el.split(" ")
        let name = student.shift();
        let grades = student.map(x => Number(x))
       
        if(studentObj[name]) {
            studentObj[name] = studentObj[name].concat(grades)
        } else {
            studentObj[name] = grades
        }
        
    }
    let sortedStudents = Object.entries(studentObj).sort((a,b) => a[0].localeCompare(b[0]))

    for (const [name, grades] of sortedStudents) {
        
        let sumGrade = 0;
            for (const grade of grades) {
                sumGrade += grade
                
            }
            let averageGrade = sumGrade / grades.length

            console.log(`${name}: ${averageGrade.toFixed(2)}`);
        }
    

}

schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])