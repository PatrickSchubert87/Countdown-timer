let counter = 10;

setInterval ( function () {
    counter--;

    if(counter >= 1) {
        id = document.querySelector('#timer');
        id.innerHTML = counter;
    }
    else {
        id.innerHTML = 'completed';
    }
}, 1000 );