'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');


let personalMovieDB  = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if ((personalMovieDB.count >=10) && (personalMovieDB.count <= 30)) {
    console.log('Вы классический зритель');
} else if (numberOfFilms.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}