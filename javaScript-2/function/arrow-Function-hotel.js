const dayCharge =180;
const days = 6;

/* Write your code here */

let hotelBill = (dayCharge,days) =>{
    let bill = dayCharge*days
    let discount ;

    if(days<=2){
        discount = 0;
    }else if(days>2 && days<=5){
        discount = 5;
    }else if(days>5){
        discount = 15;
    }
    let discountBill = bill -(bill*discount)/100;
    return discountBill.toFixed(0);
}
console.log(hotelBill(dayCharge,days));