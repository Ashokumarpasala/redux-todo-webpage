import { ADD_TODO, TOOGLE_TODO } from "./actionTypes"



export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload:  todo
    }
}

// ...

export const toggleTodo = (todoId) => {
    return {
      type: TOOGLE_TODO,
      payload: todoId,
    };
  };
  


