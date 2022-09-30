let age: number | string

age = 12
age = '112'

type Point = {
  x: number, y: number
}

type Loc = {
  lat: number, lon: number
}

let coordinates: Point | Loc

coordinates = { x: 555, y: 687 }
coordinates = { lat: 552.33, lon: 968 }


// type norrwing with union type

function claculateTax(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = parseFloat(price.replace("$", ""))
  }
  return price * tax
}

// Union Type and array 


const stuff: (number | string)[] = ["das", 144]


//Literal Type

let zero: 0 = 0

let mood: "Happy" | "Sad"

mood = "Happy"

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"


let currentDay: DayOfWeek = "Friday"

// ============================================================================//

// Exercise

let highScore: number | boolean

let stuf: number[] | string[] = []

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

type SkiSchoolStudent = {
  name: string,
  age: number,
  sport: "ski" | "snowboard",
  level: SkillLevel,
}

type RGB = {
  r: number,
  g: number,
  b: number
}
type HSL = {
  h: number,
  s: number,
  l: number
}

let color: (RGB | HSL)[] = [{ r: 255, g: 68, b: 55 }, { h: 54, s: 66, l: 8 }]


function greet(name: string | string[]) {
  if (typeof name === 'string') {
    console.log(`Hello ${name}`)
  }
  for (let n of name) {
    console.log(n)
  }



}