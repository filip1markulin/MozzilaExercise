function AddCities()
{
    
    document.getElementById("output").innerHTML = "";
    for(let i = 0;i<cities.length;i++)
    {
        let cityNumber = i+1;
        document.getElementById("output").innerHTML += cityNumber+cities[i] + "<BR>";
    }
}
var cities =["Luxembourg City","Mamer","Esch sur Alzette","Grevenmacher","Wiltz"]; 
function AddCitiesReverse()
{
    document.getElementById("output").innerHTML = "";
    for(let i = cities.length -1;i>=0;i--)
    {
        let cityNumber = i+1;
        document.getElementById("output").innerHTML += cityNumber+"-"+cities[i] + "<BR>";
    }
}
function AddCitytoArray()
{
    let mynewCity = document.getElementById("CityName").value;
    cities.push(mynewCity);
    AddCities();
}
function deleteCity()
{
    cities.pop();
    AddCities();
}
function FillinListofCities()
{
    for(let i = 0;i<cities.length;i++)
    {
        document.getElementById("ListofCities").innerHTML += '<option>'+cities[i]+'</option>' ;
    }
    for(let i = cities.length -1;i>=0;i--)
    {
        document.getElementById("ListofCities").innerHTML += '<option>'+cities[i]+'</option>' ;
    }
}