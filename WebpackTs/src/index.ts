import { add, multiply, devide } from './utils';
import Dog from './Dog';
import Shelter from './ShelterDog';

console.clear();

const elton = new Dog('elton', 'Aussie', 0.5);
elton.barck();

console.log(add(1, 6));
console.log(multiply(1, 6));
console.log(devide(1, 6));
console.log(elton);

alert("it's working!!!");
