// Select color input
// Select size input
const size = document.getElementById('sizePicker'); 
const color = document.getElementById('colorPicker'); 
const height = document.getElementById('inputHeight'); 
const width = document.getElementById('inputWidth'); 
const table = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
const submit = document.getElementById('submit'); 
const storage = document.addEventListener('click', function() { 
    localStorage.setItem('width', document.querySelector('#inputWidth').value); 
    localStorage.setItem('height', document.querySelector('#inputHeight').value);
}); 

document.querySelector('#sizePicker').submit(function () { 
    var h = document.querySelector('#inputHeight').value; 
    var w = document.querySelector('#inputWidth').value; 
    makeGrid(h, w);
}); 
function makeGrid(rows, cells) { 
    const table  = document.querySelector('#pixelCanvas'); 
    table.remove(); 
    for (var i = 1; i <= rows; i++) { 
        document.querySelector('#pixelCanvas').append('<tr id = table' + i + '></tr>') 
        for (var k = 1; k <= cells; k++) { 
            document.querySelector('#table' + i).append('<td></td>')
        }
    }

 

};
