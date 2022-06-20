const canvasDiv = document.querySelector('.canvas');
const newGridBtn = document.querySelector('.new-grid-btn');
const clearGridBtn = document.querySelector('.clear-grid-btn');

newGridBtn.addEventListener('click', createGrid);
clearGridBtn.addEventListener('click', clearColor);


function createGrid(){

    removeAllChildNodes(canvasDiv);

    let numOfPixels = prompt('New Grid Size');
    numOfPixels = +numOfPixels;
    canvasDiv.setAttribute('style', `grid-template-columns: repeat(${numOfPixels}, auto)`);


    for (let i = 0; i < numOfPixels; i++){
        for (let j = 0; j < numOfPixels; j++) {

            let pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixel');
            canvasDiv.appendChild(pixelDiv);
            pixelDiv.addEventListener('mouseenter', changeColor, {once:true});
        }
    }
}

function changeColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    this.setAttribute('style', `background-color: rgb(${r} ${g} ${b})`);
}

function clearColor() {
    
    let pixels = document.getElementsByClassName('pixel');

    Array.from(pixels).forEach(div => {

        div.setAttribute('style', 'background-color: white');
        div.addEventListener('mouseenter', changeColor, {once:true});

    })
 
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
