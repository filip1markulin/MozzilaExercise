var countries = ["Luxembourg","USA","France","Germany","Italy"];

function fillInSelect()
{
    for(let i = 0;i<countries.length;i++)
    {
        document.getElementById("listOfCountries").innerHTML += '<option value='+i+'>'+countries[i]+'</option>' ;
    }
}
function SelectThisCountry()
{
    let a=document.getElementById("listOfCountries").value;
    if(a==-1)
    {
      alert("Wrong choice");  
    }
    else{
    document.getElementById("selectedCountries").innerHTML +="<li>"+ countries[a]+"</li>"
    countries.splice(a,1);
    document.getElementById("listOfCountries").innerHTML="<option value=-1>--Select a country --</option>";
    fillInSelect();
    }
}
