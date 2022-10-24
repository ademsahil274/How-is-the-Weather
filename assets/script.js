
var botton= document.getElementById("search-input");

botton.addEventListener('click', async function(){
    var city=document.getElementById("city-search").value;
    console.log({cityName: city});

    var cityCordinates= await  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=37b933a5aef60466232e237b711fdeac");
    var cordinateJson= await cityCordinates.json();
    // .then(response => response.json())
    // .then(data => console.log(data))

    // .catch(err => alert("Please insert valid city name"))
    console.log({cordinates: cordinateJson});
    console.log({latitude: cordinateJson.coord.lat});
    console.log({longitude: cordinateJson.coord.lon});

    var lat= cordinateJson.coord.lat;
    var long= cordinateJson.coord.lon;

    var current= await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=37b933a5aef60466232e237b711fdeac");
    var currentjson= await current.json();

    console.log({currentWeather: currentjson});

    var currentData= document.getElementById("current-weather-data");
    currentData.innerHTML+="<span>"+currentjson+"</span>";

    var five= await fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&appid=37b933a5aef60466232e237b711fdeac");
    var fivejson= await five.json();
    console.log({fiveDays: fivejson});

    var day1= fivejson.list[0];
    var day2= fivejson.list[8];
    var day3= fivejson.list[16];
    var day4= fivejson.list[24];
    var day5= fivejson.list[32];
    console.log({day1});
    console.log({day2});
    console.log({day3});
    console.log({day4});
    console.log({day5});
})