import React,{useState} from 'react';
import Greeter from './components/Greeter'
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './models/item'

function App() {

const [items, setItems] = useState<Item[]>([]);

	// const items = [
  //   {id:1,product:"Lemon",quantity:5},
  //   {id:2,product:"Chicken",quantity:2}
  // ];
	return (
		<div>
			{/* <Greeter person="Colt"/> */}
		  <ShoppingList items={items}/>
		</div>
	);
}

export default App;
