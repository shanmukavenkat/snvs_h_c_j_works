const studentsData = [
    {
        name: "Raju",
        age: 17
    },
    {
        name: "Ravi",
        age: 19
    }
];

const updateStudentData = (student) => {
    student.name = "Ram";
};

updateStudentData(studentsData[0]);

console.log(studentsData[0].name);
console.log(studentsData[1].name);