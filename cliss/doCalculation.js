function doCompute()
{
    let sum=0;
    let n= Number(document.getElementById("Myinput").value);
    for(let i=1;i<=n;i++)
    {
        sum = sum + i
    }
    alert(sum);
}