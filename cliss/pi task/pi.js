function computePi()
{
    let sum=0;
    let firstnumber= document.getElementById("number1").value
    firstnumber = Number(firstnumber);
    let secondnumber= document.getElementById("number2").value
    secondnumber = Number(secondnumber)
    for(let i=firstnumber;i<=secondnumber;i++)
    {
        sum += 1/((i+1)*(i+4));
    }
    document.getElementById("result").innerHTML += sum;
}