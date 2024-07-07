let navIcon = document.getElementById("navIconCon");
let iconBars = document.getElementById("iconBars");
let iconX = document.getElementById("iconX");
let navLinksCon = document.getElementById("navLinksCon");

navIcon.addEventListener("click", () => {
    iconBars.classList.toggle("hide");
    iconX.classList.toggle("hide");
    navLinksCon.classList.toggle("nav-links-con");
});