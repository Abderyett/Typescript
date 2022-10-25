// Build in Generics
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
