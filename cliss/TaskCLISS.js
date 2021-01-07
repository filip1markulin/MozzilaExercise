/*

Create an HTML page with two inputs, one select box and one button.

When the user clicks on the button, we need to display on the HTML page a "matrix" (a grid) of boxes with 
background colors.

We need to display as many rows as specified by the first input box.
The number of columns in the grid is given by the second input box.
The background color of the boxes should be specified by the select -> choose between three different possible 
colors.

To make this easier, I will provide the HTML code.


*/
function CreateGrid()
{
    // put your code here !!
    let row = document.getElementById("Rows").value;
    row = Number(row);
    let column = document.getElementById("Cols").value;
    column = Number(column);
    boxes = document.getElementById("boxColor").value;
    boxes = Number(boxes);
    document.getElementById("Result").innerHTML = '';
    let outputResult = "";
    for(let a=0;a<row;a++){
        outputResult +="<div>"
        for(let i=0;i<column;i++){
            let colorofBox = ""
            if (boxes==1){
                colorofBox ="redBox"
            }
            if (boxes==2){
                colorofBox ="blueBox"
            }
            if(boxes==3){
                colorofBox ="yellowBox"
            }
            outputResult += '<div class="box ' +colorofBox +'"></div>'
        }
        document.getElementById("Result").innerHTML += '</div>'
    }
    document.getElementById("Result").innerHTML += '</div>'
}