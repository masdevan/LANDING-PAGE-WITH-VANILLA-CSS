// Web Core Main Scirpt
var webName = "MasDevan";

// Footer Scripter
var myFoots = document.getElementById("nameFooter");
var year = new Date();
var autoYear = year.getFullYear();
myFoots.innerHTML += `Copyright © ${webName} ${autoYear}`;

// Light Mode Event Function
var mySwitch = document.getElementById("sunLight");
mySwitch.addEventListener("change", myToggle);
function myToggle() {
    // ELEMENTARY
    var myLight = document.getElementById("lightId");
    var myCheck = document.getElementById("sunLight");
    // IF ELSE LOGICAL
    if (myCheck.checked) {
        myLight.innerHTML = "<i id='trueMoon' class='fa fa-moon'></i>";
        var setMoon = document.getElementById("trueMoon");
        setMoon.style.color = "#24319a";
        document.body.classList.add("lightModes");
        localStorage.setItem("checkboxStatus", "true");
    } else {
        myLight.innerHTML = "<i class='fa fa-sun'></i>";
        document.body.classList.remove("lightModes");
        localStorage.setItem("checkboxStatus", "false")
    }
}

// LOGIKA Program Reload Page pada Javascript
document.addEventListener("DOMContentLoaded", function(){
    var myChecks = document.getElementById("sunLight");

    if(localStorage.getItem("checkboxStatus") == "true"){
        myChecks.checked = true;
    } else {
        myChecks.checked = false;
    }
    myToggle();
});
