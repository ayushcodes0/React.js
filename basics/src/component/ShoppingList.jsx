import React, { useState } from 'react'

const ShoppingList = () => {
    const [item, setItem] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !quantity) return;
        const newItem = {
            name, quantity: parseInt(quantity)
        }
        setItem((prevItem) => [...prevItem, newItem]);
        setName("");
        setQuantity("");
    }

  return (
    <div>
        <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter name' value={name} onChange={e=>setName(e.target.value)} />
        <input type="number" placeholder='Enter quantity' value={quantity} onChange={e=>setQuantity(e.target.value)} />
        <button type='submit'>Add Item</button>
      </form> 
      <ul>
        {item.map((obj,index)=>{
            return(
                <li key={index}>
                    {obj.name}, Quantity: {obj.quantity}
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default ShoppingList
