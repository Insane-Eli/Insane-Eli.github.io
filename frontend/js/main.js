function loadHeader(){
    console.log("page fully loaded");
    fetch('/frontend/pages/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
    });
}

window.onload = function() {
    loadHeader();
};