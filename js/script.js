// Humburger Button
const humburger = document.getElementById('humburger-button');
const navbarList = document.querySelector('.navbar-list');
const navbarBox = document.querySelectorAll('.navbar-box');
let count = 0;

humburger.addEventListener('click', function() {
    navbarList.classList.toggle('active');
    if(count == 0){
        this.innerText = '✕';
        count++;
    } else {
        this.innerText = '☰';
        count = 0;
    }
});

navbarBox.forEach(nb => {
    nb.addEventListener('click', () => {
        navbarList.classList.remove('active');
        humburger.innerText = '☰';
        count = 0;
    });
});