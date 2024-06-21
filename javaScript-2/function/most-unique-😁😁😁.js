function readLine() {
    return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function Trekking(kit, item) {
    this.kit = kit;
    this.item = item;
}

function main() {
    const item = 'surfboard';
    const trekkingKit = {
        ruckSackBag : true,
        clothes: ["Shirt", "T-Shirt/Full sleeves","Jeans"],
        firstAid: true,
        waterBottle: "2 liters",
        sunGlasses: "UV Protection",
        headTorch: true,
        medicines: true,
        footWear: "Non-skid",
        food: ["dry fruits", "nuts", "chocolate bars"],

    };

    function Trekking(item){
        this.item = item;
    }

    Trekking.prototype.isKitContains = function(obj){
        return Object.getOwnPropertyNames(obj).some(item=> item === this.item);
    };
    const trekking = new Trekking(item);
    const restTrekking = trekking.isKitContains(trekkingKit);

    console.log(restTrekking);
}