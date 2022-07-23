"use strict";

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('what film do you watch?', ''),
    b = prompt('how do you like?', ''),
    c = prompt('what film do you watch?', ''),
    d = prompt('how do you like?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
