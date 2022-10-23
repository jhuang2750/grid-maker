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
    if(colorSelected != "SELECT"){
        let cells = document.querySelectorAll("td");
        for(x of cells){
            if(x.style.backgroundColor==""){
                x.style.backgroundColor=colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    if(colorSelected != "SELECT"){
        let cells = document.querySelectorAll("td");
        for(x of cells){
                x.style.backgroundColor=colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll("td");
    for(x of cells){
            x.style.backgroundColor="";
    }
}