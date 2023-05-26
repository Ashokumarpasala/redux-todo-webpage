import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from './actions';


function SingleTodo({ todo, toggleTodo }) {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className='todo-item list-group m-2' onClick={handleToggle}>
      <div className='list-group-item'>
        <span className={todo.isCompleted ? 'completed' : ''}>{todo.data}</span>
      </div>
    </div>
  );
}

export default connect(null, { toggleTodo })(SingleTodo);
