let bgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput").value;
let fontSize = document.getElementById("fontSizeInput").value;
let weightInput = document.getElementById("fontWeightInput").value;
let inputPadding = document.getElementById("paddingInput").value;
let borderRadius = document.getElementById("borderRadiusInput").value;

function buttonApplyClicked() {
    let bgValue = bgColor.value;
    let foColor = fontColor.value;
    let foSize = fontSize.value;
    let weInput = weightInput.value;
    let inPadding = inputPadding.value;
    let radiusBorder = borderRadius.value;
    console.log(bgValue);
}