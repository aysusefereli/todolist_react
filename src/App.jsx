import { useDispatch, useSelector } from "react-redux";
import { addtodolist, clearall, removetodolist } from "./store/slices/todolist";
import { useState } from "react";
import './App.css'

function App() {
  const todolist = useSelector((state) => state.todolist.value);
  const dispatch = useDispatch();

  console.log(Math.floor(Math.random() * 100))

  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleAddClick = () => {
    dispatch(addtodolist());
    const newList = { id: Math.floor(Math.random() * 100), text: inputValue };
    setList([...list, newList]);
    setInputValue("");
  };

  const handleRemoveClick = (id) => {
    if (list.length > 0) {
      dispatch(removetodolist());
      const updatedList = list.filter((item) => item.id !== id);
      setList(updatedList);
    }
  };

  const handleClearAllClick = () => {
    dispatch(clearall());
    setList([]);
  }

  return (
    <>
    <div className="todolist">
      <h1>To Do List</h1>
      <div className="addList">
      <input  type="text"  placeholder="write here"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button  className="addButton" onClick={handleAddClick}>Add</button>
      </div>
      {list.map((item) => (
        <p className="remove" key={item.id}>
          {item.id}.{item.text}
          <button className="removeButton" onClick={() => handleRemoveClick(item.id)}>Remove</button>
        </p>
      ))}
      <button className="clearButton" onClick={handleClearAllClick}>Clear All</button>
    </div>
    </>
  );
}

export default App;
