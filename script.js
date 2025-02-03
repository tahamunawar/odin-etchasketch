let dimension = 16;
const dabba = document.getElementById('grid-box');
const newbutton = document.getElementById('butt2');

function newGrid(){
    dabba.textContent = "";
    let newDimension = prompt("Enter the new number of squares per grid. Ensure number ranges from 1-100");
    if (newDimension>100){
        newDimension = 100;
    }
    if (newDimension<1){
        newDimension = 1;
    }
    dimension = newDimension;
    createGrid(dimension);
}

function createGrid(dimension){
    for (let i=0;i<dimension*dimension;i++) {
        const drawingBox = document.createElement("div");
        drawingBox.style.width = `${100/dimension}%`;
        drawingBox.style.border = "0.5px solid black";
        drawingBox.classList.add("drawing-box");
        drawingBox.style.boxSizing = "border-box";
        dabba.append(drawingBox);
    }
}

newbutton.addEventListener('click',newGrid);
createGrid(dimension);
