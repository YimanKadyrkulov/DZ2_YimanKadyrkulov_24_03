const smallBlock = document.querySelector('.smallBlock');
const bigBlock = document.querySelector('.bigBlock');

function moveSmallBlock(left, top) {
    smallBlock.style.left = left + 'px';
    smallBlock.style.top = top + 'px';


    if (left < 450 && top === 0) {
        setTimeout(() => {
            moveSmallBlock(left + 10, top);
        }, 10);
    } else if (left === 450 && top < 450) {
        setTimeout(() => {
            moveSmallBlock(left, top + 10);
        }, 10);
    } else if (left > 0 && top === 450) {
        setTimeout(() => {
            moveSmallBlock(left - 10, top);
        }, 10);
    } else if (left === 0 && top > 0) {
        setTimeout(() => {
            moveSmallBlock(left, top - 10);
        }, 10);
    }
}

moveSmallBlock(0, 0);




let counterValue = 0;
let intervalId;

const counter = document.getElementById('counter');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');


function updateCounter() {
    counter.textContent = counterValue;
}

startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        counterValue++;
        updateCounter();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
});
stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);


    startBtn.disabled = false;
    stopBtn.disabled = true;
});