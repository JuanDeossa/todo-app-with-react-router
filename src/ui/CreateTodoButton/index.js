import React from 'react';
import './CreateTodoButton.css';

export function CreateTodoButton(props) {
  return (
    <button
      className="CreateTodoButton"
      onClick={props.onClick}
    >
      +
    </button>
  );
}
