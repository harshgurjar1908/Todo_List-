import React from "react";

function Todolist(props) {
  const itemval = props.text;
  const onSelect = props.onSelect;
  const id = props.id;

  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            onSelect(id);
          }}
        />
        <li>{itemval}</li>
      </div>
    </>
  );
}

export default Todolist;
