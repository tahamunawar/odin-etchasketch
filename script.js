let dimension = 16;
const dabba = document.getElementById('grid-box');
const clearbutton = document.querySelector('#butt1');
const newbutton = document.getElementById('butt2');
const linecontainer = document.querySelector(".dimension-size");
const line = document.createElement("p");
line.textContent = `Current Number of Boxes per Dimension: ${dimension}`;
linecontainer.append(line);
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
    line.textContent = `Current Number of Boxes per Dimension: ${dimension}`;
    for (let i=0;i<dimension*dimension;i++) {
        const drawingBox = document.createElement("div");
        drawingBox.style.width = `${100/dimension}%`;
        drawingBox.style.border = "0.1px solid black";
        drawingBox.classList.add("drawing-box");
        drawingBox.style.boxSizing = "border-box";
        dabba.append(drawingBox);
    }
    drawGrid();
}

function clearGrid(){
    const boxList = document.querySelectorAll(".drawing-box");
    boxList.forEach((item) => {
        item.style.backgroundColor = "white";
    })
}

function drawGrid(){
    const boxList = document.querySelectorAll(".drawing-box");
    boxList.forEach((item) => {
        item.addEventListener("mouseenter", function(e) { // got this from stack overflow goated
            if(e.buttons == 1){
                item.style.backgroundColor = "black";
                console.log("box colored while mouse being hovered");
            }
        })
        item.addEventListener("mousedown", () => {
            item.style.backgroundColor = "black";
            console.log("box colored on just a single click");
        } )
    })
}

newbutton.addEventListener('click',newGrid);
clearbutton.addEventListener('click',clearGrid);
createGrid(dimension);
drawGrid();
