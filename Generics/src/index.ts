// Build in Generics

console.clear();
const num: Array<number> = [];
const colors: Array<string> = [];

const input = document.querySelector<HTMLInputElement>('#username')!;
input.value = 'Jesse James';

const btn = document.querySelector<HTMLButtonElement>('.btn'!)!;

// Generic function

function indentity<Type>(item: Type): Type {
	return item;
}

indentity<string>('Hello');
indentity<number>(5);

function getRandElement<T>(list: T[]): T {
	const raIdx = Math.floor(Math.random() * list.length);
	return list[raIdx];
}
console.log(getRandElement<string>(['a', 'b', 'c', 'd', 'e', 'f']));

getRandElement([5, 8, 5, 5]);

// Type constrain
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
	return { ...obj1, ...obj2 };
}

const combo = merge({ name: 'Colt' }, { pets: ['Bird', 'fish'] });

console.log(combo);

interface Lengthy {
	length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
	return thing.length * 2;
}

function printDoubleLength2(thing: Lengthy): number {
	return thing.length * 2;
}

interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class Playlis<T> {
	public queue: T[] = [];
}
