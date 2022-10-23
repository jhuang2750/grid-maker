// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let newRow = document.querySelector("table").insertRow(-1);
    numRows++;
    if(numCols==0){
        let newCell = newRow.insertCell(-1);
        newCell.onclick = function(){newCell.style.backgroundColor = colorSelected;}
        numCols++;
    }
    else{
        for(let i=0; i<numCols; i++){
            let newCell = newRow.insertCell(i);
            newCell.onclick = function(){newCell.style.backgroundColor = colorSelected;}
        }
    }
}

// Add a column
function addC() {
    if(numRows==0){
        addR();
        numRows++;
    }
    else{
        let rows = document.querySelector("table").getElementsByTagName("tr");
        for(x of rows){
            let newCell = x.insertCell(-1);
            newCell.onclick = function(){newCell.style.backgroundColor = colorSelected;}
        }
    }
    numCols++;
}

// Remove a row
function removeR() {
    if(numRows>0){
        document.querySelector("table").deleteRow(-1);
        numRows--;
    } 
}

// Remove a column
function removeC() {
    let rows = document.querySelector("table").getElementsByTagName("tr");
    for(x of rows){
        x.deleteCell(-1);
    }
    numCols--;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}