// All variables
let todayDay = document.querySelector('#todayDay');
let todayMonth = document.querySelector('#todayMonth');
let cityName = document.querySelector('#cityName');
let nextDay = document.querySelector('#nextDay')
let afterDay = document.querySelector('#afterDay');
let searchBar = document.querySelector('#searchBar');
let weatherCondition = document.querySelector('#weatherCondition')
let dayTwoMax = document.querySelector('#dayTwoMax');
let dayTwoMin = document.querySelector('#dayTwoMin');
let dayTwoCond = document.querySelector('#dayTwoCond');
let dayTwoIcon = document.querySelector('#dayTwoIcon');
let dayThreeIcon = document.querySelector('#dayThreeIcon');
let dayThreeMax = document.querySelector('#dayThreeMax');
let dayThreeMin = document.querySelector('#dayThreeMin');
let dayThreeCond = document.querySelector('#dayThreeCond');
let Data = [];
let currentIcon = document.getElementById('currentIcon')
let wind = document.querySelector('#wind')
let cloud = document.querySelector('#cloud')







// Setting the current date and time
let d = new Date();
document.getElementById('day0').textContent = d.getDate();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayCurrent = weekday[d.getDay()];
let dayNext = weekday[d.getDay() + 1];
let dayAfter = weekday[d.getDay() + 2];
let curentMonth = month[d.getMonth()];
todayDay.textContent = dayCurrent
nextDay.textContent = dayNext
afterDay.textContent = dayAfter
todayMonth.textContent = curentMonth

// search functions

searchBar.addEventListener('keyup', function (e){

    let serchOnKey = e.target.value
    getWeather(serchOnKey)

    let dayTwo = Data.forecast.forecastday[1].day
    let dayThree = Data.forecast.forecastday[2].day
    cityName.textContent = Data.location.name
    weatherCondition.textContent = Data.current.condition.text
    currentIcon.src = 'https:' + Data.current.condition.icon
    tempatureC.textContent =  Data.current.temp_c + '°C'
    wind.textContent = Data.current.wind_kph + ' km/h'
    cloud.textContent = Data.current.cloud + ' %'
    dayTwoMax.textContent = dayTwo.maxtemp_c + '°C'
    dayTwoMin.textContent = dayTwo.mintemp_c + '°'
    dayTwoCond.textContent = dayTwo.condition.text
    dayTwoIcon.src = 'https:' + dayTwo.condition.icon
    dayThreeMax.textContent = dayThree.maxtemp_c + '°C'
    dayThreeMin.textContent = dayThree.mintemp_c + '°'
    dayThreeCond.textContent = dayThree.condition.text
    dayThreeIcon.src = 'https:' + dayThree.condition.icon

})

// API function

function getWeather(city) {
    let myHttp = new XMLHttpRequest();
    myHttp.open('GET', `https://api.weatherapi.com/v1/forecast.json?key=4f8ef6e30c5d4b6c8c7193419220611&q=${city}&days=3`)
    myHttp.send();
    myHttp.addEventListener('readystatechange', () => {
        
    if (myHttp.readyState == 4 && myHttp.status == 200) {
        Data = JSON.parse(myHttp.response);
    }

    })
}
/*

    getWeather('lodon');

    let dayTwo = Data.forecast.forecastday[1].day
    let dayThree = Data.forecast.forecastday[2].day
    cityName.textContent = Data.location.name
    weatherCondition.textContent = Data.current.condition.text
    currentIcon.src = 'https:' + Data.current.condition.icon
    tempatureC.textContent =  Data.current.temp_c + '°C'
    dayTwoMax.textContent = dayTwo.maxtemp_c + '°C'
    dayTwoMin.textContent = dayTwo.mintemp_c + '°'
    dayTwoCond.textContent = dayTwo.condition.text
    dayTwoIcon.src = 'https:' + dayTwo.condition.icon
    dayThreeMax.textContent = dayThree.maxtemp_c + '°C'
    dayThreeMin.textContent = dayThree.mintemp_c + '°'
    dayThreeCond.textContent = dayThree.condition.text
    dayThreeIcon.src = 'https:' + dayThree.condition.icon

*/