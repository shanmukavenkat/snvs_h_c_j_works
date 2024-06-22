let array_item = [2,3,4,5,6,7];

let result = array_item.map((item, index) => {
    if(index % 2 === 0) {
        return item * item;
    } else {
        return item;
    }
}