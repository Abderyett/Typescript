interface Point {
	x: number;
	y: number;
}

const pt: Point = { x: 2, y: 4 };

interface Person {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
  sayHi():string
  greeting:()=>string;
}

const thomas: Person = {
	first: 'Thomas',
	last: 'Hardy',
	id: 65,
  sayHi:()=>'hello',
  greeting:()=>'Good Morning'
};



interface Product {
  name:string;
  price:number;
  applyDiscount(discount:number):number
}


const shoes: Product = {
  name:'blue suede shoes',
  price :100, 
  applyDiscount:(amount:number)=>{
    const newPrice=this.price*amount
    this.price=newPrice
    return this.price
  }


}

shoes.applyDiscount(.4)



//Agregate two interfaces
 interface Dog{
  name:string;
  age:number;
 }


 interface Dog {
  breed:string,
  bark():string;
 }


 const elton: Dog = {
  name:'elton',
  age:.5,
  breed:'Astralian sheperd',
  bark:()=>`woof`


 }





//  extends interface

 interface ServiceDog extends Dog{
  job:"Drug dog"|"bomb"|"guide dog"
 }


 const chewy:ServiceDog = {
  name:'chewy',
  age:5,
  breed:"lab",
  bark(){
    return "bark"
  },
  job:"guide dog"
 }


 //Extending multiple interfaces

 interface Human{
  name:string
 }

 interface Employee{
  readonly id:number,
  email:string
 }

 interface Engineer extends Human,Employee{
  level:string,
  languages:string[]
 }

 const Andrei:Engineer = {
  name:"Andrei", 
  id:534,
  email:"anderei@email.com",
  level:"senior",
  languages:["javascript","python"]
 }