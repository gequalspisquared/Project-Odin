

// Method 2
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World');

// Method 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert('Hello World');
});