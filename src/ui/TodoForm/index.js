import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

export function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const navigate=useNavigate()
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/')
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={props.text}
        onChange={onChange}
        placeholder="..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {props.actionText}
        </button>
      </div>
    </form>
  );
}
