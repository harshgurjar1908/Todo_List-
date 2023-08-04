import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [todolist, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const update = (event) => {
    setTodo(event.target.value);
  };

  const listoftask = () => {
    setItems((olditems) => {
      return [...olditems, todolist];
    });
    setTodo("");
  };

  const deleteitems = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrelem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main">
        <h1>ToDO List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Item"
          onChange={update}
          name="todo"
          value={todolist}
        />
        <button onClick={listoftask}>+</button>
        <ol>
          {items.map((itemval, index) => {
            return (
              <Todolist
                text={itemval}
                key={index}
                id={index}
                onSelect={deleteitems}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
