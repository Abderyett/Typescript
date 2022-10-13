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

	get fullName() {
		return `${this.first} ${this.last}`;
	}
}

const player1 = new Player('colt', 'steele');
player1.taunt();
// console.log(player1.first);

const player2 = new Player('golden', 'brown');
player2.taunt();
console.log(player2.numLives);
player2.loseLife();
console.log(player2.numLives);

console.log(player1.getScore());
player1.updateScore(56);
console.log(player1.getScore());

console.log(player2.fullName);
