const counterElement = document.getElementById('counter');

let counter = 0;

function inc() {
    counter++;
    counterElement.innerText = counter;
}

function dec() {
    counter--;
    counterElement.innerText = counter;
}