import type { Person } from './types.js';

export default class User {
	constructor(public username: string, public email: string) {}

	logout() {
		console.log(`${this.username} is log out!`);
	}
}
