const apiKey = "2b0f76593491f6b7721868ec6a28f3e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inputBar = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const cityName = document.querySelector(".cityName");
const temprature = document.querySelector(".temprature");
const weatherIcon = document.querySelector(".weatherImg");
const humidity = document.querySelector(".humidityValue");
const wind = document.querySelector(".windValue");
const weather = document.querySelector(".weatherDetails");


let city = "london"
async function weatherApp(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    let data = await response.json();
    inputBar.value = ""
    
    cityName.innerText = data.name;
    temprature.innerText = `${Math.floor(data.main.temp)}°C`;

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png"
    }else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png"
    }

    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} km/h`;

    weather.classList.remove("weatherShow")
}

searchBtn.addEventListener("click",() => {
    weatherApp(inputBar.value)
})

weather.addEventListener("dblclick",() => {
    weather.classList.add("weatherShow")
})