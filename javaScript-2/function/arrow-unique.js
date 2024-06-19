function createCabBooking(area, city) {
    return {
        area,city,
        updatePickupPoint(newArea,newCity){
            this.area = newArea;
            this.city = newCity
        }
    }



}


function main() {
    const newArea = Kukatpally;

    const newCity = Hyderabad;

    const cabBooking1 = createCabBooking("Abids", "Hyderabad");
    cabBooking1.updatePickupPoint(newArea, newCity);

    console.log(`${cabBooking1.area} ${cabBooking1.city}`);
}