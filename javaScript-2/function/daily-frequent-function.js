const fruit = "apple"
const objectEntities = [
    {
        fruit: "apple",
        vegetable: "broccoli"
    },
    {
        fruit: "kiwi",
        vegetable: "broccoli"
    },
    {
        fruit: "apple",
        vegetable: "cauliflower"
    },
    {
        fruit: "orange",
        vegetable: "mushrooms"
    },
];

const newObject = objectEntities.filter(entity=> entity.fruit === fruit);
console.log(newObject);
