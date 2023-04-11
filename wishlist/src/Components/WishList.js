import React, { useState } from 'react';


function WishList() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPriority, setItemPriority] = useState('low');

  const add = () => {
    if (itemName !== '') {
      setItems([...items, { name: itemName, priority: itemPriority }]);
      setItemName('');
      setItemPriority('low');
    }
  };

  const remove= (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const update = (index, priority) => {
    const newItems = [...items];
    newItems[index].priority = priority;
    setItems(newItems);
  };

  const moveItemToTop = (index) => {
    const newItems = [...items];
    const item = newItems.splice(index, 1);
    newItems.unshift(item[0]);
    setItems(newItems);
  };

return (
    <div>
      <h2>TO DO TASK!</h2>
        <div>
            <input type="text" placeholder="Add a Task" value={itemName} onChange={(e) => setItemName(e.target.value)}/>

        <select value={itemPriority} onChange={(e) => setItemPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={add}>Click to Add Item</button>
      </div>
    
    <ul>
        {items.map((item, index) => (
            <li key={index}>
            <span className="tasktext">{item.name}</span>

            <select value={item.priority} onChange={(e) => update(index, e.target.value)}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <button className="b1" onClick={() => remove(index)}>Remove</button>
            <button className="b1" onClick={() => moveItemToTop(index)}>Move to Top</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishList;
