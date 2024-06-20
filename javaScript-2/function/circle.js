function Circle(radius) {
    this.getArea = function(){
        return (3.14)*radius*radius;
    }
    this.getCircumference = function(){
        return 2*(3.14)*radius;
    }

}

/* Please do not modify anything below this line */

function main() {
    const radius = 7;

    const circle1 = new Circle(radius);

    console.log(circle1.getArea());
    console.log(circle1.getCircumference());
}