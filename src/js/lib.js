import {Http} from './http.js';
const http = new Http('https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/eaa544aed7e3bdee37c6caa2a515f1d4c38fbd4f/weather.json');

const city = document.querySelector('.city');
const city2 = document.querySelector('.city-2');
const city3 = document.querySelector('.city-3');
const description1 = document.querySelector('.description-1');
const description2  = document.querySelector('.description-2');
const description3  = document.querySelector('.description-3');
const date1El = document.querySelector('.date-1');
const date2EL = document.querySelector('.date-2');
const date3EL = document.querySelector('.date-3');
const sDate1El = document.querySelector('.today-1');
const sDate2EL = document.querySelector('.tomorrow-2');
const sDate3EL = document.querySelector('.third-day-3 ');
const temp1 = document.querySelector('.temp-1');
const temp2 = document.querySelector('.temp-2');
const temp3 = document.querySelector('.temp-3');



let weatherList = [];
loadData();
async function loadData() {                              //запрос данных с сервера
    try {
        const response = await http.getWeather();
        weatherList = await response.json();
        if (weatherList == null) {
            weatherList = []
        }
        rebuildWeatherData(weatherList,city,description1,description2,description3);
    } catch (e) {
        // e -> ошибка
        console.log('error');
    } finally {
        console.log('Данные загружены');
    }
}

function rebuildWeatherData(weatherList,city,description1,description2,description3){          //добавление данных сервера в шаблон
    if (weatherList.city.name == 'Kazan'){          //город
        city.innerHTML = `
       Казань
    `;}
    if (weatherList.city.name == 'Kazan'){          //город
        city2.innerHTML = `
       Казань
    `;}
    if (weatherList.city.name == 'Kazan'){          //город
        city3.innerHTML = `
       Казань
    `;}
    if (weatherList.list[0].weather.description = 'scattered clouds'){          //описание прогноза
        description1.innerHTML = `
       Переменная облачность
    `;}
    if (weatherList.list[1].weather.description = 'clear sky'){                 //описание прогноза
        description2.innerHTML = `
       Безоблачно
    `;}
    if (weatherList.list[2].weather.description = 'light rain'){                //описание прогноза
        description3.innerHTML = `
       Возможен дождь
    `;}

    const date = new  Date(weatherList.list[0].dt*1000);
    const day1 = date.getDate();
    const year = date.getFullYear();
    date1El.innerHTML = `
    Сегодня, ${day1} апреля ${year}
    `;

    const date2 = new  Date(weatherList.list[1].dt*1000);
    const day2 = date2.getDate();
    const year2 = date.getFullYear();
    date2EL.innerHTML = `
    Завтра, ${day2} апреля ${year2}
    `;

    const date3 = new  Date(weatherList.list[2].dt*1000);
    const day3 = date3.getDate();
    const year3 = date3.getFullYear();
    date3EL.innerHTML = `
    Послезавтра, ${day3} апреля ${year3}
    `;

    sDate1El.innerHTML = `
    ${day1} апреля
    `;
    sDate2EL.innerHTML = `
    ${day2} апреля
    `;
    sDate3EL.innerHTML = `
    ${day3} апреля
    `;

    temp1.innerHTML = `
    ${Math.round(weatherList.list[0].temp.day - 273.15)}
    `;
    temp2.innerHTML = `
    ${Math.round(weatherList.list[1].temp.day - 273.15)}
    `;
    temp3.innerHTML = `
    ${Math.round(weatherList.list[2].temp.day - 273.15)}
    `;

    console.log(date);
    console.log(Math.round(weatherList.list[0].temp.day - 273.15));

}
