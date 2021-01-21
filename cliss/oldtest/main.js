function ComputedTemperature()
{
    let fahrenheit = document.getElementById("tempF").value
    let fahrenheitNumber=Number(fahrenheit)
    let celciusNumber= (fahrenheitNumber-32)/(9/5);
    document.getElementById("Result").innerHTML = celciusNumber
    if (celciusNumber<0)
    {
        alert("Its Freezing");
    }
    else
    {
       if(celciusNumber<=10) 
       {
           alert("Its chilly");
       }
       else
       {
           if(celciusNumber<=25)
           {
               alert("its normal");
           }
           else
           {
               alert("its Hot");
           }
       }
    }
}