function printName(person: { first: string, last: string }): void {
  console.log(`${person.first} ${person.last}`);

}

printName({ first: 'Thomas', last: 'Shelby' })


let coodinates: { x: number, y: number } = { x: 34, y: 2 }

function randomCoord(): { x: number, y: number } {
  return { x: Math.random(), y: Math.random() }
}


// printName({ first: 'Bukayo', last: 'saka', age: 20 })

const player = { first: 'Bukayo', last: 'saka', age: 20, team: 'Arsenal FC' }

printName(player)


//? Type Aliases

type Point = { x: number; y: number }

function doubleCoord(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 }
}


type Song = {
  title: string,
  artist: string,
  numStreams: number,
  credits: {
    producer: string,
    writer: string
  }
}
function calculatePayout(song: Song): number {
  return song.numStreams * 0.003

}

function printSong(song: Song): void {
  console.log(`${song.artist} - ${song.title}`)

}


const mySong: Song = {
  title: 'Apocalypse',
  artist: 'Cigarettes after sex',
  numStreams: 12486,
  credits: {
    producer: 'Greg Gonzalez',
    writer: 'Greg Gonzalez'
  }
}


let earning = calculatePayout(mySong)
console.log(earning)
printSong(mySong)

//! Optional properties

type Dimension = {
  x: number,
  y: number,
  z?: number
}

const possibleDimensions: Dimension = { x: 3, y: 5 }


//! readonly properties

type User = {
  readonly id: number,
  username: string
}


const newUser: User = {
  id: 567,
  username: 'jesse'
}

console.log(newUser.id)

// newUser.id = 56255

//! intersection type


type Circle = {
  radius: number
}
type Colorful = {
  color: string
}

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
  radius: 5,
  color: 'yellow'
}

type Cat = {
  numLives: number
}

type Dog = {
  breed: string
}

type CatDog = Cat & Dog & {
  age: number
}


const oscar: CatDog = {
  numLives: 8,
  breed: 'Husky',
  age: 4

}


type Movie = {
  readonly title: string,
  originalTitle?: string,
  director: string,
  releaseYear: number,
  boxOffice: {
    budget: number,
    grossUS: number,
    grossWorldwide: number
  }
}

const dune: Movie = {
  title: "dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108325568,
    grossWorldwide: 4008925565

  }
}

function getProfit(movie: Movie): number {

  let globalGross = movie.boxOffice.grossWorldwide;
  let movieBudget = movie.boxOffice.budget;

  return globalGross - movieBudget
}

console.log(getProfit(dune))

