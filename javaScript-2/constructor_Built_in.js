let time = new Date();
console.log(time);
console.log(typeof(time));
//here time is the new instance of the Date object
//Date is the built-in constructor function
let Date1 = new Date("2021-01-08");
console.log(Date1);
let Date2 = new Date(2021,0,8,12,8,30);
console.log(Date2);
Date2.setFullYear(2022);
Date2.setMonth(11);
console.log(Date1.getFullYear());
console.log(Date1.getMonth());
console.log(Date1.getDate());