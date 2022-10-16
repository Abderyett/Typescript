class Player {
	public readonly name: string;
	public age: number;
	private score: number = 0;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	private secretMethod(): void {
		console.log('Secret method');
	}
}

const player1 = new Player('Jesse', 23);

// player1.score = 23;

// it's still run method on runtime
// player1.secretMethod();
