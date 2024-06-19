class Quadrilateral {
    constructor(height, width) {
        this.width = width;
        this.height = height;
    }
}

Quadrilateral.prototype.getHeightAndWidth = function () {
    return this;
};
console.log(Quadrilateral.prototype);

const quadrilateral = new Quadrilateral(4, 5);
const quadrilateralDetails = quadrilateral.getHeightAndWidth();

console.log(quadrilateral === quadrilateralDetails);