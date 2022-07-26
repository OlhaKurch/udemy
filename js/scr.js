"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');
    }
}
start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();


function rememberMyFilm () {
    if (personalMovieDB.count<10) {
        console.log("слишком мало фильмов");
    } else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
        console.log("вы классический зритель");
    } else if (personalMovieDB.count>=30) {
        console.log("вы киноман");
    } else {
        console.log("error");
    }
}
rememberMyFilm ();


function detecPersonalLevel () {
    for (let i=0; i<2; i++) {
        const a = prompt('what film do you watch?', ''),
              b = prompt('how do you like?', '');
    
              if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
              } else {
                i--;
              }
    }
}
detecPersonalLevel ();


function writeYourGenres() {
    for (let i=1; i<4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}.`, '');
    }
}
writeYourGenres();
