function loadHeader(){
    console.log("page fully loaded");
    fetch('/frontend/pages/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            getAge();
    });
}

window.onload = function() {
    loadHeader();
};

const age = document.getElementById("age");
const ageDec = document.getElementById("ageDecimal");
const birthday = new Date("2008-04-22");

function getAge (){
    const now = new Date();
    const years = (now - birthday) / (1000 * 60 * 60 * 24 * 365.2425); // .2425 cause of leap years
    age.textContent = Math.floor(years);
    ageDec.textContent = '.' + years.toFixed(9).slice(3);
}

getAge();
setInterval(getAge,50);

