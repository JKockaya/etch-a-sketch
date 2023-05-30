const container = document.getElementById('container');

createGrid(16);
gridDraw();

function createGrid(num) {
    const divs = [];

    for (let i = 1; i <= num * num; i++) {
        divs.push(`square-${i}`);
    }

    divs.forEach(function(e) {
        container.innerHTML += 
        `<div class="square" id="${e}"></div>`;
    })

    const squareSize = document.querySelectorAll('.square');
    const size = 640 / num;

    for (let square of squareSize) {
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    }
}

function gridDraw() {
    const squares = document.querySelectorAll('.square');

for (const square of squares) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'pink';
    })
}

}


const genBtn = document.querySelector('button');

genBtn.addEventListener('click', newCanvas);

function newCanvas() {
    const cellNum = prompt("Enter a grid size up to 100: ");
    container.innerHTML = ``;
    createGrid(cellNum);
    gridDraw();


    
    

} 