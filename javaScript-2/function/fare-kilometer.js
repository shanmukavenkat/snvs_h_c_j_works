function Ride(fare, distance) {

    this.getFarePerKilometer =function(){
        return fare/distance;
    }

}

/* Please do not modify anything below this line */

function main() {
    const fare = 120;
    const distance = 6;

    const ride1 = new Ride(fare, distance);

    console.log(ride1.getFarePerKilometer());
}