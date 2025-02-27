const apiK="1dfff6d7ebd62a2ca42d1760f1e528a4";
const apiUrl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon');

async function checkWeatercons(city) {
    const res = await fetch(apiUrl + city +`&appid=${apiK}`);
    var data =await res.json();
    console.log(data)
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +'°C';
    document.querySelector('.wind').innerHTML=data.wind.speed +'km/h';
    document.querySelector('.humidity').innerHTML=data.main.humidity +'%';

        if(data.weather[0].main == 'Clouds'){
        weatherIcon.src='./images/clouds.png'
    }
        else if(data.weather[0].main == 'Clear'){
        weatherIcon.src='./images/clear.png'
    }
        else if(data.weather[0].main == 'Rain'){
        weatherIcon.src='./images/rain.png'
    }
        else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src='./images/drizzle.png'
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src='./images/mist.png'
    }
}
searchBtn.addEventListener('click', () => {
checkWeatercons(searchBox.value);
})
checkWeatercons()