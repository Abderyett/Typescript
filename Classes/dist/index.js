class Player {
	#score = 0;
	numLives = 10;
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}
	taunt() {
		console.log('boo!!');
	}

	getScore() {
		return this.#score;
	}

	updateScore(newScore) {
		this.#score = newScore;
	}
	loseLife() {
		this.numLives -= 1;
	}
	static randomPlayer() {
		return new Player('Andy', 'Sumberg');
	}

	get fullName() {
		return `${this.first} ${this.last}`;
	}
	set score(newScore) {
		if (newScore < 0) {
			throw new Error('Score must be positive');
		}
		this.#score = newScore;
	}
}

class AdminPlyer extends Player {
	constructor(first, last, powers) {
		super(first, last);
		this.powers = powers;
	}
	isAdmin = true;
}

const admin = new AdminPlyer('Admin', 'Player');
admin.powers = ['delete', 'edit'];

// const player1 = new Player('colt', 'steele');
// player1.taunt();
// // console.log(player1.first);

// const player2 = new Player('golden', 'brown');
// player2.taunt();
// console.log(player2.numLives);
// player2.loseLife();
// console.log(player2.numLives);

// console.log(player1.getScore());
// player1.updateScore(56);
// player1.score = 123;
// console.log(player1.getScore());

// console.log(player2.fullName);
