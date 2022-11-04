import React,{useRef} from 'react';


interface ShoppingListForm {
  onAddItem(item: string): void;
}
function ShoppingListForm({onAddItem}:ShoppingListForm) {

const inputRef=useRef<HTMLInputElement>(null)

  function handleSubmit(e:React.FormEvent) { 
    e.preventDefault();
   const newProduct=inputRef.current!.value
   onAddItem(newProduct)
   inputRef.current!.value=""
    
  }
  return ( 
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={inputRef}/>
      <button type="submit">Add item</button>
    </form>
   );
}

export default ShoppingListForm;