let movieTitle: string = 'The Drop';
movieTitle = 'The Vault';
// movieTitle = 78;
movieTitle.toUpperCase();


let numCatLives: number = 7;
numCatLives = 5;
// numCatLives = 'zero';

let isGameOver: boolean = false;
isGameOver = true;

// isGameOver = 'true'




// Type inference

let TvShow = 'The mentalist'

// Type any

let thing: any = 'turtle';
thing = 0
thing()

// Delayed Initilization

const movies = ['Catch me if youcan', 'the arrival', 'the town'];

let foundMovie: string;

for (let movie in movies) {
  if (movie == 'the town') {
    foundMovie = movie;
  }
}