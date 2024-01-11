function main() {
    // arrayOfCarBrands
    let arrayOfCarBrands = JSON.parse(readLine().replace(/'/g, '"'));
    let arrayOfIndianCarBrandNames = [];
    for (let carBrand of arrayOfCarBrands) {
        let eachCarBrandCountry = carBrand.country;
        if (eachCarBrandCountry === "India") {
            let nameOfCarBrand = carBrand.name;
            arrayOfIndianCarBrandNames.push(nameOfCarBrand);
        }
    }
    console.log(arrayOfIndianCarBrandNames);
}