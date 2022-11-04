import React,{useRef} from 'react';


interface ShoppingListForm {
  onAddItem(item: string,quantity: number): void;
}
function ShoppingListForm({onAddItem}:ShoppingListForm) {

const productInput=useRef<HTMLInputElement>(null)
const quantityInput=useRef<HTMLInputElement>(null)

  function handleSubmit(e:React.FormEvent) { 
    e.preventDefault();
   const newProduct=productInput.current!.value
   const newQty=parseInt(quantityInput.current!.value)
   onAddItem(newProduct,newQty);
   productInput.current!.value=""
   quantityInput.current!.value=""
    
  }
  return ( 
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInput}/>
      <input type="number" min={0}  ref={quantityInput}/>
      <button type="submit">Add item</button>
    </form>
   );
}

export default ShoppingListForm;