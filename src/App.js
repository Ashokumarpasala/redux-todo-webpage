import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';
import SingleTodo from './SingleTodo';
import completed from './images/check-circle-fill.svg'
import pending from './images/hourglass-split.svg'
import all from './images/list-task.svg'

function App({ addTodo, todos, toggleTodo }) {
  const [data, setData] = useState('');
  const [filter, setFilter] = useState('all');
  

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleAdd = () => {
    if (data.trim()) {
      const newTodo = {
        id: Date.now(),
        data: data,
        isCompleted: false,
      };

      addTodo(newTodo);
      setData('');
    }
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredTodos = filter === 'completed'
  ? todos.filter((todo) => todo.isCompleted)
  : filter === 'pending'
  ? todos.filter((todo) => !todo.isCompleted)
  : todos;

  const filterImages = {
    completed: completed,
    pending: pending,
    all: all
  };
  
  const selectedImage = filterImages[filter];
  

  return (
    <div className='container text-center d-flex justify-content-around align-item-center'>
      <div className='mt-5'>
        <input type='text' onChange={handleChange} value={data} />
        <button onClick={handleAdd} className='mb-5'>
          ADD Todo
        </button>
        <br />
        <div className=''>
          <button className='m-2' onClick={() => handleFilter('all')}>
            All Todos
          </button>
          <button className='m-2' onClick={() => handleFilter('completed')}>
            Completed Todos
          </button>
          <button className='m-2' onClick={() => handleFilter('pending')}>
            Pending Todos
          </button>
        </div>
      </div>
      <div className='card w-50 m-5' style={{height: '500px', overflow: 'auto'}}>
      <style>
        {`
          .card::-webkit-scrollbar {
            width: 5px;
          }
          
          .card::-webkit-scrollbar-track {
            background-color: white;
          }
          
          .card::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 5px;
          }
          
          .card::-webkit-scrollbar-thumb:hover {
            background-color: white;
          }
        `}
  </style>
        <div className='d-flex justify-content-center ' style={{borderBottom: '2px solid black', position: 'sticky', top: 0, background: 'white', zIndex: 1, }}>
          <img src={selectedImage} alt='selectSvgs' style={{width: '45px', padding: '5px'}}/>
          <h1 >
            List of {filter === 'completed' ? 'Completed' : filter === 'pending' ? 'Pending' : 'All'} Todos
          </h1>
        </div>

          {filteredTodos.map((todo) => (
          <SingleTodo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo })(App);
