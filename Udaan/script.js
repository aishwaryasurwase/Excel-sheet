

function cellClicked(event) {
    let id = event.target.id;
    let val = event.target.value;

    let selectedCell = document.getElementById(id);

    let updatedVal = +val;

    console.log(updatedVal, isNaN(updatedVal))
    selectedCell.className = 'highlight';

    if (val.startsWith('SUM') || val.startsWith('sum')) {
        selectedCell.value = 0;
        let valSplit = val.split(': ')

        let num1 = +document.getElementById(valSplit[1]).value;
        let num2 = +document.getElementById(valSplit[2]).value;

        if (isNaN(num1)) {
            num1 = 0
        }
        if (isNaN(num2)) {
            num2 = 0;
        }
        document.getElementById(id).value = Number(num1) + Number(num2);
    }
}


function createGrid(gridSize) {
    let grid = document.getElementById('grid');
    for (let row = 0; row < gridSize; row++) {
        let newRow = grid.insertRow(row);
        for (let column = 0; column < gridSize; column++) {
            let newCol = newRow.insertCell(column);
            let input = document.createElement('input');
            input.className = 'cell';
            input.id = row + "" + column;
            newCol.appendChild(input);
            newRow.appendChild(newCol);
        }
        grid.appendChild(newRow);
    }
}
createGrid(10);