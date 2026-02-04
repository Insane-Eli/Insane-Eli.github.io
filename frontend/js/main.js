window.onload = function() {
    console.log("page fully loaded");
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
        });
};