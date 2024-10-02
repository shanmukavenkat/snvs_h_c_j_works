//js Every

const arrayCollege = [
    {roll:76,marks:800},{roll:54,marks:100},{roll:324,marks:400 }
];

const the_marks = 45;

const isAllPass = arrayCollege.every((student)=>{
    return student.marks >= the_marks;
});

console.log("**the_marks",isAllPass)