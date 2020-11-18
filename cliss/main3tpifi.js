var boxColor = "redBox"
function changeBox(){
    if(boxColor == "redBox"){
        boxColor = "blueBox"
    } else {
        boxColor = "redBox";
    }
    mynewdiv = "<div class='boxSize " + boxColor + "'></div>";
    document.getElementById("resultingDiv").innerHTML = mynewdiv;
}
function ChangeNumber(ammounttoChange){
    let mycurrentNumber = Number(document.getElementById("currentnumber").innerHTML);
    mycurrentNumber = mycurrentNumber + ammounttoChange;
    document.getElementById("currentnumber").innerHTML = mycurrentNumber;
}