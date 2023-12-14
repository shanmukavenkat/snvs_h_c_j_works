function switchOff() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent="Switched Off";
    document.getElementById("offSwitch").style.backgroundColor = "red";
    document.getElementById("onSwitch").style.backgroundColor = "white";
}

function switchOn() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent="Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "green";
    document.getElementById("onSwitch").style.backgroundColor = "white";


}