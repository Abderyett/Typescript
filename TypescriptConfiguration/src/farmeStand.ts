interface Product{
  name:string,
  price:number,
  qty:number
}


const printProductFarm=(product:Product):void=>{

  console.log(`${product.name} - $${product.price}`)
}