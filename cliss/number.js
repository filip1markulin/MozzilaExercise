
function multiply()
{
    num1 = document.getElementById("firstInput") .value;
    num2 = document.getElementById("secondInput") .value;
    num3 = document.getElementById("multiplier").value;
    result = (Number(num3)*(Number(num1)+Number(num2)));
    document.getElementById("Result").innerHTML = result;
}
function myfirstname()
{
   myname= "Filip Markulin";
   document.getElementById("putnamehere").innerHTML = myname;
}

function addBlueBox()
{
    document.getElementById("boxes").innerHTML ='<div class="box bluebox"></div>';
}
function addRedBox()
{
    document.getElementById("boxes").innerHTML ='<div class="box redbox"></div>';
}
function DisplayValue()
{
    alert(document.getElementById("boxes").innerHTML);
}
function AddMyName()
{
    currentValue = document.getElementById("boxes").innerHTML;
    currentValue = '<div class="box bluebox"></div>' + '<div class="box redbox"></div>';
    document.getElementById("boxes").innerHTML = currentValue;
}

currentBoxColor = "redbox";
function ToggleBox()
{
    if(currentBoxColor=="redbox")
    {
        currentBoxColor = "bluebox";
    }
    else
    {
        currentBoxColor = "redbox";
    }
    document.getElementById("recipient").innerHTML = currentBoxColor;
}
function addNumber(ammounttoChange){
    let mycurrentNumber = Number(document.getElementById("currentnumber").innerHTML);
    mycurrentNumber = mycurrentNumber + ammounttoChange;
    document.getElementById("currentnumber").innerHTML = mycurrentNumber;
}