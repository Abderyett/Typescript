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

//* Fuction retun types




square(4)
greet('boby')

doSomething('ChickeFace', 76, false)


