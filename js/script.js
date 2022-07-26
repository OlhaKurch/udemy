"use strict";





// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let num=50;
// for (let i=1; i<5; i++){
//     console.log(num);
//     num++;
// }


// let result = '';
// for (let i = 1; i < 7; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

// function firstTask() {

//     for (let i=5; i<11; i++) {
//         console.log(i);
//     }
    
// }

// for (let i=20; i>9; i--) { 
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }


// for (let i=2; i<11; i++) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i=2; i<=16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i=2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);
// return arrayOfNumbers;



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const results = [];


//     for (let i = 0; i < arr.length; i++) {
//         results[i] = arr[i];
//     }

//     console.log(results);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i]*2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);
//     return data;



//     const line = 5;
//     let resul = '';
//     for (let i = 0; i <= line; i++) {
//         for (let j = 0; j < line - i; j++) {
//             resul += " ";
//         }
//         for (let j = 0; j < 2 * i + 1; j++) {
//             resul += "*";
//         }
//         resul += "\n";
//     }
    
//     console.log(resul)


const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count<10) {
    console.log("слишком мало фильмов");
} else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
    console.log("вы классический зритель");
} else if (personalMovieDB.count>=30) {
    console.log("вы киноман");
} else {
    console.log("error");
}

// const a = prompt('what film do you watch?', ''),
//     b = prompt('how do you like?', ''),
//     c = prompt('what film do you watch?', ''),
//     d = prompt('how do you like?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i=0; i<2; i++) {
    const a = prompt('what film do you watch?', ''),
          b = prompt('how do you like?', '');

          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
          } else {
            i--;
          }

    
}
console.log(personalMovieDB);



function sayHello(name) {
    return 'hi, ${name}!';
}
sayHello('Anton');


function returnNeighboringNumbers(numbr) {
    return [numbr-1, numbr, numbr+1];
}
returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <=0) {
        return num;
    }
    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}
getMathResult(5,3);

for (let i=5; i<11; i++) {
    console.log(i);
}

for (let i=20; i>9; i--) {
    if (i === 13) {
        return
    }
    else {
        console.log(i);
    }
}

for (let i=2; i<11; i++) {
    if (i % 2 === 1) {
        continue
    }
    else {
        console.log(i);
    }
}

let i=2;
while (i<=16) {
    if (i % 2 ===0){
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }

    }



    const number = [];
for (let i=5; i<11; i++) {
    number[i - 4] = i;
    number[0]=15;
}
console.log(number)


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i=0; i<8; i++) {
    result[i] = arr[i];
}
console.log(result);

const dat = [5, 10, 'Shopping', 20, 'Homework'];
for (let i=0; i<data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i]*2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = '${data[i]} - done';
    }
}
console.log(data);


const data = [5, 10, 'Shopping', 20, 'Homework'];
const res =[];
for (let i=0; i<data.length; i++) {
    res[i] = data[data.length-i-1]
}
console.log(res);

const line = 5;
let tree = '';
for (let i=0; i<=line; i++) {
    for (let j=0; j<line-i; j++) {
        tree += ' '
    }
    for (let j=0; j<2*i+1; j++) {
        tree += '*';
    }
    tree += '\n';
}
console.log(tree);

function sayHello(name) {
    return `Hi, ${name} !`;
}

console.log(sayHello('Anton'))

function getMath(num, hige) {
    if (typeof(hige) !== 'number' || hige <= 0 ) {
        return num;
    } 
    let str = '';
    for (let i=1; i<=hige; i++) {
        if (i===hige) {
            str += `${num*i}`;
        } else {
            str += `${num*i}---`;
        }
    }
    return str;
}
console.log(getMath(3, 2));