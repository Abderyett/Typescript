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
