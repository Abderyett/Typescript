function square(num: number) {
  return num * num

}


// Multiple params
const doSomething = (person: string, age: number, isFunny: boolean) => {

}


// function greet(person: string) {
//   return `Good morning ${person}`
// }

//* Default params

function greet(person: string = 'stranger') {
  return `Good morning ${person}`
}

//* Function retun types

function devide(num: number): number {
  return num / 2

}

// * Function return number or toString

function random(num: number) {
  if (Math.random() < 0.5) {
    return num.toString()
  }
  return num

}

//* annonymous functions

const colors = ['yellow', 'green', 'blue'];

colors.map(color => {
  color.toString()
})



//* Void functions that return  or at least  undefined or null


function printTwice(msg: string): void {
  console.log('hello')
  console.log(msg)
}



//* Never, is function that return nothing

function sendError(msg: string): never {
  throw new Error(msg)
}


function gameLoop(name: string): never {
  while (true) {
    console.log(`still runing ${name}`)
  }
}


printTwice('body')

devide(100)




square(4)
greet('boby')

doSomething('ChickeFace', 76, false)


