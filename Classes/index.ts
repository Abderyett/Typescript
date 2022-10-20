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
