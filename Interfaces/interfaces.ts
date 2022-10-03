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