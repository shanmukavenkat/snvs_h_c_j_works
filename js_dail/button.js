let newButton = document.getElementById('newButton');
let backgroundEle = document.getElementById('nameEle');

let array_new = ["21BQ1A4201", "21BQ1A4202", "21BQ1A4203", "21BQ1A4204"
    , "21BQ1A4205", "21BQ1A4206", "21BQ1A4207", "21BQ1A4208", "21BQ1A4209", "21BQ1A4210"
    , "21BQ1A4211", "21BQ1A4212", "21BQ1A4213", "21BQ1A4214", "21BQ1A4215", "21BQ1A4216"
    , "21BQ1A4217", "21BQ1A4218", "21BQ1A4219", "21BQ1A4220", "21BQ1A4221", "21BQ1A4222"
    , "21BQ1A4223", "21BQ1A4224", "21BQ1A4225", "21BQ1A4226", "21BQ1A4227", "21BQ1A4228"
    , "21BQ1A4229", "21BQ1A4230", "21BQ1A4231", "21BQ1A4232", "21BQ1A4233", "21BQ1A4234"
    , "21BQ1A4235", "21BQ1A4236", "21BQ1A4237", "21BQ1A4238", "21BQ1A4239", "21BQ1A4240"
    , "21BQ1A4241", "21BQ1A4242", "21BQ1A4243", "21BQ1A4244", "21BQ1A4245", "21BQ1A4246"
    , "21BQ1A4247", "21BQ1A4248", "21BQ1A4249", "21BQ1A4250", "21BQ1A4251", "21BQ1A4252"
    , "21BQ1A4253", "21BQ1A4254", "21BQ1A4255", "21BQ1A4256", "21BQ1A4257", "21BQ1A4258"
    , "21BQ1A4259", "21BQ1A4260", "21BQ1A4261", "21BQ1A4262", "21BQ1A4263", "21BQ1A4264"
    , "21BQ1A4265", "21BQ1A4266", "21BQ1A4267", "21BQ1A4268", "21BQ1A4269", "21BQ1A4270"
    , "21BQ1A4271", "21BQ1A4272", "21BQ1A4273", "21BQ1A4274", "21BQ1A4275", "21BQ1A4276"
    , "21BQ1A4277", "21BQ1A4278", "21BQ1A4279", "21BQ1A4280", "21BQ1A4281", "21BQ1A4282"
    , "21BQ1A4283", "21BQ1A4284", "21BQ1A4285", "21BQ1A4286", "21BQ1A4287", "21BQ1A4288"
    , "21BQ1A4289", "21BQ1A4290", "21BQ1A4291", "21BQ1A4292", "21BQ1A4293", "21BQ1A4294"
    , "21BQ1A4295", "21BQ1A4296", "21BQ1A4297", "21BQ1A4298", "21BQ1A4299", "21BQ1A4300"];

newButton.addEventListener('click', function() {
    // Create a document fragment to improve performance
    let fragment = document.createDocumentFragment();

    for (let x in array_new) {
        // Create a new button element for each item in the array
        let button = document.createElement('button');
        button.textContent = array_new[x];
        button.style.backgroundColor = "blue";
        button.style.color = "white";
        button.style.fontSize = "20px";
        button.style.margin = "20px";
        button.style.padding = "20px";
        button.style.border = "dashed";
        button.style.borderRadius = "10px";
        button.style.cursor = "wait";
        button.style.fontFamily = "Arial";

        // Append the new button to the fragment
        fragment.appendChild(button);
    }

    // Append the entire fragment to the background element
    backgroundEle.appendChild(fragment);
});
