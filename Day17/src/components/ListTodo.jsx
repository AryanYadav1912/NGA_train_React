import React from "react";

function ListTodo(props) {
  return (
    <>
      <li className="listItem">
        {props.items}
        <span>
          <i
            className="fa-solid fa-trash-can"
            onClick={(e) => {
              props.handleDelete(props.index);
            }}
          ></i>
        </span>
      </li>
    </>
  );
}

export default ListTodo;
