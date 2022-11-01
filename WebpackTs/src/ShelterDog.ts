import Dog from './Dog.js';

export default class shelterDog extends Dog {
	constructor(
		name: string,
		breed: string,
		age: number,
		public shelter: string
	) {
		super(name, breed, age);
	}
}
