var currentBoxColor = "redbox";
var boxcount = 1;
function Box()
{
    var inputvar= document.getElementById("inputbox").value;
    for(;boxcount<=Number(inputvar);boxcount++)
    {
        if (currentBoxColor=="redbox")
        {
            currentBoxColor="greenbox";
        }
        else
        if (currentBoxColor=="greenbox")
        {
            currentBoxColor="bluebox";
        }
        else
        if (currentBoxColor=="bluebox")
        {
            currentBoxColor="redbox";
        }
        let addBox = '<div class="boxes ' + currentBoxColor + '">'  + boxcount + '</div>';
        document.getElementById("outputbox").innerHTML+=addBox
    }
}