function data()
{
    let startNumber=10;
    let endNumber=20;
    let sum=0;
    for(let i=startNumber+1;i<=endNumber-1;i++)
    {
        sum+=i;
        //document.getElementById("computesum").innerHTML +=i +" : "+sum + "<br>";
    }
    document.getElementById("computesum").innerHTML += "The sum of numbers bigger than "+ startNumber +" and smaller than "+ endNumber +" is "+sum
}