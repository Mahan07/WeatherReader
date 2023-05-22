// https://api.openweathermap.org/data/2.5/weather?appid=f0f8ccb0b2361e1a3be40906e987fd4a&q=indore
const city=document.getElementById('city');
const submit=document.getElementById('submit');
const searched=document.getElementById('searched');
const temp=document.getElementById('temp');
const sky=document.getElementById('sky');

const skypic=document.getElementById('skypic');
skypic.style.display = "none";

//Date and Day
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();

const dayIndex = currentDate.getDay();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

document.getElementById('day').innerHTML=weekdays[dayIndex];
document.getElementById('date').innerHTML=`${day}/${month}/${year}`;

const weatherImages = {
    Sunny: "images/sunny.png",
    Thunderstorm: "../images/thunder.jpg",
    Clouds: "../images/clouds.jpg",
    Drizzle: "../images/drizzle.jpg",
    Haze: "../images/haze.jpg",
    Rain: "images/rain.jpg",
    Snow: "images/Snow.jpg",
    Fog: "images/fog.jpg",
    Mist: "images/fog.jpg",
    Smoke: "images/fog.jpg",
    Dust: "images/dust.jpg",
    Sand: "images/dust.jpg",
    Clear: "../images/clear.jpg",
    Ash: "../images/ash.jpg",
    Squall: "../images/Squall.jpg",
    Tornado: "../images/tornado.jpg",
    Wind: "images/wind.png"
};

const getinfo=async(event)=>{
    event.preventDefault();
    const citysearch=city.value;
    if(citysearch===""){
        searched.innerHTML="Please enter your city😒";
    }
    else{
        try{
            searched.innerHTML="Get Output Here😀";
            let url=`https://api.openweathermap.org/data/2.5/weather?appid=f0f8ccb0b2361e1a3be40906e987fd4a&q=${citysearch}`
            const response=await fetch(url);
            const data= await response.json();
            const arrdata=[data];

            citysearch.innerHTML=`${arrdata[0].name},${arrdata[0].sys.country}`;
            temp.innerHTML=(arrdata[0].main.temp - 273.15).toFixed(1) + "&deg;C";
            sky.innerHTML=arrdata[0].weather[0].main;
            skypic.src=weatherImages[arrdata[0].weather[0].main];
            skypic.style.display = "";

        }
        catch{
            searched.innerHTML="Please check city name😒";
            skypic.style.display = "none";
            temp.innerHTML="";
            sky.innerHTML="";
        }
    }
};

submit.addEventListener('click',getinfo);
function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      submit.click();
    }
  };