import React,{useState} from 'react';
import Greeter from './components/Greeter'
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './models/item'
import ShoppingListForm from './components/ShoppingListform';
import { v4 } from 'uuid';
function App() {

const [items, setItems] = useState<Item[]>([]);
const addItem =(product:string,quantity:number)=>{
	setItems([...items,{id:v4(),product,quantity}]);
}

	// const items = [
  //   {id:1,product:"Lemon",quantity:5},
  //   {id:2,product:"Chicken",quantity:2}
  // ];
	return (
		<div>
			{/* <Greeter person="Colt"/> */}
		  <ShoppingList items={items}/>
			<ShoppingListForm onAddItem={addItem}/>
		</div>
	);
}

export default App;
