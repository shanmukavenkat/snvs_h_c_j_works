class Student{
    constructor(name,age,no,place) {
        this.name= name;
        this.age = age;
        this.no = no;
        this.place = place;
    }
    newStudent(){
        return this.name + " is a new student";
    }
}

const student = new Student("John", 25, 1234567890, "New York");
console.log(student.newStudent());
