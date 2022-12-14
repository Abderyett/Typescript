
// Array of string

const activeUser: string[] = []

activeUser.push("Tonny")


//Array of number

const ageList: number[] = [22, 58, 5]

//Array of boolean

const bools: boolean[] = [true, false]

//array of objects

type Point = {
  x: number,
  y: number
}

const coordinates: Point[] = []

coordinates.push({ x: 2.36525, y: 34.2585588 })

//Multidementional Array of Point

const list: string[][] = [['X', 'O', 'X'], ['X', 'O', 'X'], ['X', 'O', 'X']]

//Excercise

const ages: number[] = []

const gameBoard: string[][] = []

type Product = {
  name: string,
  price: number,
}

function getTotal(products: Product[]): number {
  let total = 0
  for (let product of products) {
    total = +product.price
  }
  return total

}