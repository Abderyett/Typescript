class Player {
	// public readonly name: string;
	// public age: number;
	// private _score: number = 0;

	constructor(
		public name: string,
		public age: number,
		protected _score: number = 0
	) {}

	private secretMethod(): void {
		console.log('Secret method');
	}

	get fullName(): string {
		return `${this.name} ${this.age}`;
	}

	set score(newScore: number) {
		if (newScore < 0) {
			throw new Error('Score must be positive');
		}
		this._score = newScore;
	}
}

class superPlayer extends Player {
	public isAdmin: boolean = true;
	maxScore() {
		this._score = 99999;
	}
}

const player1 = new Player('Colt', 35, 100);
player1.score = 99;

// player1.score = 23;

// it's still run method on runtime
// player1.secretMethod();

interface Colorful {
	color: string;
}

interface Printable {
	print(): void;
}

class Bike implements Colorful {
	constructor(public color: string) {}
}

const bike1 = new Bike('red');

class Jacket implements Colorful, Printable {
	constructor(public color: string, public brand: string) {}

	print() {
		console.log(`${this.brand} ${this.color} Jacket`);
	}
}

const jacket1 = new Jacket('prada', 'black');

abstract class Employee {
	constructor(public first: string, public last: string) {}

	abstract getPayed(): number;
}

class FulltimeEmployee extends Employee {
	constructor(first: string, last: string, private salary: number) {
		super(first, last);
	}

	getPayed() {
		return this.salary;
	}
}

class PartTimeEmployee extends Employee {
	constructor(
		first: string,
		last: string,
		private hourlyRate: number,
		private workedHour: number
	) {
		super(first, last);
	}

	getPayed() {
		return this.hourlyRate * this.workedHour;
	}
}

const ben = new FulltimeEmployee('Ben', 'white', 5000);
console.log(ben.getPayed());
const rob = new PartTimeEmployee('Rob', 'Holding', 20, 60);
console.log(rob.getPayed());
