import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
 

function ToDoItem(props) {
    console.log(props.status)
 
  return (
    <li className="todo-list-item" key={props.id}>
      
      <Link to="/todo/"> {props.item.text}</Link>
     
   {props.status ? <button onClick={() => props.DeleteItem(props.id)} className="delete">
        &times;
      </button>:<button onClick={() => props.ReturnItem(props.id)} className="delete">
       R
      </button>}{" "}
    </li>
  );

}
export default ToDoItem;
