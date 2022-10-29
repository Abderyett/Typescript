console.clear();
function triple(thing: string | number) {
	if (typeof thing === 'string') {
		return thing.repeat(3);
	}
	return thing * 3;
}

console.log(triple(3));

const printLetter = (word?: string) => {
	if (word) {
		for (let char of word) {
			console.log(char);
		}
	} else {
		console.log('there is nothing');
	}
};

// Equality narrowing
function doThing(x: string | number, y: string | boolean) {
	if (x === y) {
		return x.toUpperCase();
	}
}

// narrowing with in operator

interface Movies {
	title: string;
	duration: number;
}

interface TvShow {
	title: string;
	numEpisodes: number;
	episodeDuration: number;
}

function getRuntime(media: Movies | TvShow): number {
	if ('numEpisodes' in media) {
		return media.numEpisodes * media.episodeDuration;
	} else {
		return media.duration;
	}
}

console.log(getRuntime({ title: 'Shawshank redemption', duration: 140 }));
console.log(
	getRuntime({ title: 'Mentalist', numEpisodes: 60, episodeDuration: 50 })
);

function printFullDate(date: string | Date): void {
	if (date instanceof Date) {
		console.log(date.toUTCString());
	}
	return console.log(new Date(date).toUTCString());
}

class User {
	constructor(public name: string) {}
}

class Company {
	constructor(public username: string) {}
}

function printEntity(entity: User | Company) {
	if (entity instanceof User) {
		console.log(entity.name);
	} else {
		console.log(entity.username);
	}
}

interface Cat {
	name: string;
	numLives: number;
}

interface Dog {
	name: string;
	breed: string;
}

// Narrowing Predicates

function isCat(animal: Cat | Dog): animal is Cat {
	return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
	if (isCat(animal)) {
		return 'Meao';
	} else {
		return 'Whof';
	}
}

//Descriminated Union

interface Cow {
	name: string;
	weight: number;
	age: number;
	TYPE: 'cow';
}
interface Rooster {
	name: string;
	weight: number;
	age: number;
	TYPE: 'rooster';
}
interface Duck {
	name: string;
	weight: number;
	age: number;
	TYPE: 'duck';
}
type FarmAnimals = Rooster | Duck | Cow;

function getFarmSound(animal: FarmAnimals) {
	switch (animal.TYPE) {
		case 'cow':
			return 'Mow';
		case 'rooster':
			return 'roost';
		case 'duck':
			return 'Kwak';
		default:
			//We should never get it here if handlded all cas correctly
			const shoudlNeverGetHere: never = animal;
			return shoudlNeverGetHere;
	}
}

const stevie: Rooster = {
	name: 'stevie',
	weight: 4,
	age: 2,
	TYPE: 'rooster',
};

console.log(getFarmSound(stevie));
