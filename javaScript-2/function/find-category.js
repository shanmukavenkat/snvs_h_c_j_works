
    const categoryOfItem = "pulses";
    const item = "green gram";

    const mart = [
        {
            category:"pulses",
            items: ["green gram", "green peas", "Turkish gram"]
        },
        {
            category:"soaps",
            items:["santoor", "dove", "lux", "pears"]
        },
        {
            category:"oil",
            items: ["sunflower oil", "grapeseed oil", "soybean oil"]
        },
        {
            category:"cereals",
            items: ["wheat", "rice", "maize", "oat"]
        },
        {
            category:"spices",
            items: ["cumin", "coriander", "black pepper", "clove"]
        }
    ];

    const newObject = mart.find(entity => entity.category === categoryOfItem);

    if(newObject){
        const newObject1 = newObject.items.includes(item);
        if(newObject1){
            console.log("Item Found");
        }else {
            console.log("Item Not Found");
        }

    }else{
        console.log("Category Not Found");

    }


