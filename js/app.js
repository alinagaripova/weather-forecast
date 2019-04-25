
const secondDay = document.querySelector('.tomorrow');
const thirdDay = document.querySelector('.third-day');
const header1 = document.querySelector('.day-1-header');
const main1 = document.querySelector('.day-1-main');
const header2 = document.querySelector('.day-2-header');
const main2 = document.querySelector('.day-2-main');
const header3 = document.querySelector('.day-3-header');
const main3 = document.querySelector('.day-3-main');


secondDay.addEventListener('click', () => {
    console.log('tom');
    if (header1.className == 'date-block day-1-header visible active') {
        header1.className = 'date-block moveLeft';
        main1.className = 'center moveLeft';
        header2.className = 'date-block moveLeft2 active';
        main2.className = 'center moveLeft2 active';
    }
    // if (header3.className == 'date-block moveLeft4 active') {
    //     header3.className = 'date-block moveLeft';
    //     main3.className = 'center moveLeft';
    //     header2.className = 'date-block moveLeft2 active';
    //     main2.className = 'center moveLeft2 active';
    // }
});
thirdDay.addEventListener('click', () => {
    console.log('third');
    if (header2.className == 'date-block moveLeft2 active'){
        header1.className = 'date-block moveLeft';
        main1.className = 'center moveLeft';
        header2.className = 'date-block moveLeft3';
        main2.className = 'center moveLeft3';
        header3.className = 'date-block moveLeft4 active';
        main3.className = 'center moveLeft4 active';
    } if (header1.className == 'date-block day-1-header visible active') {
        header1.className = 'date-block moveLeft moveLeft';
        main1.className = 'center moveLeft moveLeft';
        header2.className = 'date-block moveLeft3 opacity';
        main2.className = 'center moveLeft3 opacity';
        header3.className = 'date-block moveLeft4 active';
        main3.className = 'center moveLeft4 active';
    }

});