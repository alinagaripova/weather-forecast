import {Http} from './http.js';

const firstDay = document.querySelector('.today');
const secondDay = document.querySelector('.tomorrow');
const thirdDay = document.querySelector('.third-day');
const header1 = document.querySelector('.day-1-header');
const main1 = document.querySelector('.day-1-main');
const header2 = document.querySelector('.day-2-header');
const main2 = document.querySelector('.day-2-main');
const header3 = document.querySelector('.day-3-header');
const main3 = document.querySelector('.day-3-main');
const http = new Http('https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/eaa544aed7e3bdee37c6caa2a515f1d4c38fbd4f/weather.json');

let weatherList = [];
async function loadData() {
    try {
        const response = await http.getWeather();
        weatherList = await response.json();
        if (weatherList == null) {
            weatherList = []
        }
        rebuildWeatherData(weatherList);
    } catch (e) {
        // e -> ошибка
        console.log('error');
    } finally {
        console.log('Данные загружены');
    }
}

function rebuildWeatherData(weatherList){

}


firstDay.addEventListener('click', () => {
    firstDay.className = 'today checked';
    secondDay.className = 'tomorrow';
    thirdDay.className = 'third-day';

    if (header2.className.includes('active')) {
        header2.className = 'date-block moveRight3';
        main2.className = 'center moveRight3';
        header1.className = 'date-block moveRight4 active';
        main1.className = 'center moveRight4 active';

    }
    if (header3.className.includes('active')){
        header3.className = 'date-block moveRight';
        main3.className = 'center moveRight';
        header1.className = 'date-block moveRight4 active';
        main1.className = 'center moveRight4 active';
    }
});

secondDay.addEventListener('click', () => {
    firstDay.className = 'today';
    secondDay.className = 'tomorrow checked';
    thirdDay.className = 'third-day';

    if (header1.className.includes('active')) {
        header1.className = 'date-block moveLeft';
        main1.className = 'center moveLeft';
        header2.className = 'date-block moveLeft2 active';
        main2.className = 'center moveLeft2 active';
    }
    if (header3.className.includes('active')) {
        header3.className = 'date-block moveRight';
        main3.className = 'center moveRight';
        header2.className = 'date-block moveRight2 active';
        main2.className = 'center moveRight2 active';
    }
});
thirdDay.addEventListener('click', () => {
    firstDay.className = 'today';
    secondDay.className = 'tomorrow';
    thirdDay.className = 'third-day checked';

    if (header2.className.includes('active')){
        header1.className = 'date-block moveLeft';
        main1.className = 'center moveLeft';
        header2.className = 'date-block moveLeft3';
        main2.className = 'center moveLeft3';
        header3.className = 'date-block moveLeft4 active';
        main3.className = 'center moveLeft4 active';
    } if (header1.className.includes('active')) {
        header1.className = 'date-block moveLeft moveLeft';
        main1.className = 'center moveLeft moveLeft';
        header2.className = 'date-block moveLeft3 opacity';
        main2.className = 'center moveLeft3 opacity';
        header3.className = 'date-block moveLeft4 active';
        main3.className = 'center moveLeft4 active';
    }
});
