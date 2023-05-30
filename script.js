const container = document.getElementById('container');
const divs = [];

for (let i = 1; i <= 256; i++) {
    divs.push(`square-${i}`);
}

divs.forEach(function(e) {
    container.innerHTML += 
    `<div class="square" id="${e}"></div>`;
})

const squares = document.querySelectorAll('.square');

for (const square of squares) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'pink';
    })
}