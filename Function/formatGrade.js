function formatGrade(grade) {
    
    let gradeNum = grade.toFixed(2);

    if(grade < 3) {
        console.log(`Fail (2)`);
    } else if( grade < 3.50) {
        console.log(`Poor (${gradeNum})`);
    } else if( grade < 4.50) {
        console.log(`Good (${gradeNum})`);
    } else if( grade < 5.50) {
        console.log(`Very good (${gradeNum}) `);
    } else if( grade >= 5.50) {
        console.log(`Excellent (${gradeNum})`);
    }
}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)