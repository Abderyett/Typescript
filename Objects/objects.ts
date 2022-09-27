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

function doubleCoord(point: { x: number, y: number }): { x: number, y: number } {
  return { x: point.x * 2, y: point.y * 2 }
}