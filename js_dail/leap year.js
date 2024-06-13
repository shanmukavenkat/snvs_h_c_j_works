function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "leap year";
            } else {
                return "not a leap year";
            }
        } else {
            return "leap year";
        }
    } else {
        return "not a leap year";
    }
}

let year = 2020;
let Year_value = leapYear(year);
console.log(Year_value); // Output: leap year
