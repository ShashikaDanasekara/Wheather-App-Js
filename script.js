/**
 * Urls
 *  
 * https://api.openweathermap.org/data/2.5/weather?q=colombo&units=metric&appid=3407423aef8d2633fadcd0551c1d1c82
 * 
 * https://openweathermap.org/img/wn/02d@2x.png
 * 
 * https://source.unsplash.com/1280x720?snow
 * 
 */

const cityElement = document.getElementById('city');
const tempElement = document.getElementById('temperature');
const discriptionElement = document.getElementById('description');
const iconElement = document.getElementById('icon');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');


let weather = {
    "apiKey":"3407423aef8d2633fadcd0551c1d1c82" ,
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city 
        +"&units=metric&appid="
        +this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        const { name } = data;
        const { icon,description} = data.weather[0];
        const { temp,humidity} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)

        cityElement.innerText = "Wheather in " + name;
        tempElement.innerHTML = temp + "&deg;C";
        iconElement.src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        discriptionElement.innerText = description;
        humidityElement.innerText = "Humidity: "+ humidity + "%";
        windElement.innerText = "Wind speed: "+speed+"km/h";

    }
}

document.getElementById("search-button").addEventListener('click',function(){
    const search = document.getElementById('search-bar').value;
    console.log(typeof(search));

    if (search == "") return;
    
    weather.fetchWeather(search);
    document.getElementById('wheather').classList.remove('loading');  
})
