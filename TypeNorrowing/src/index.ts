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
