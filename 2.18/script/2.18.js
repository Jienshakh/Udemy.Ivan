'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    };
};

start();

let personalMovieDB  = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};



function rememberMyFilmes() {
    let i = 0;
    do {
        const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько оцените его', '');
        if ( a != "" && a != null && a.length < 50 && b != "" && b != null && b.length < 50) {
            personalMovieDB.movies[a] = b;
            ++i;
        }
    }
    while(i < 2);  
};

rememberMyFilmes();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if ((personalMovieDB.count >=10) && (personalMovieDB.count <= 30)) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    };
};

detectedPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
}

writeYourGenres();