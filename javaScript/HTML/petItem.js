let petsImageUrls = {
    dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};

let selectImg = document.getElementById("petSelect");
let petsPics = document.getElementById("petImg");

selectImg.addEventListener("change", function() {
    if (event.target.value === "cat") {
        petsPics.src = petsImageUrls.cat;
    } else if (event.target.value === "dog") {
        petsPics.src = petsImageUrls.dog;
    } else if (event.target.value === "parrot") {
        petsPics.src = petsImageUrls.parrot;
    } else if (event.target.value === "spider") {
        petsPics.src = petsImageUrls.spider;
    } else if (event.target.value === "rabbit") {
        petsPics.src = petsImageUrls.rabbit;
    }
});