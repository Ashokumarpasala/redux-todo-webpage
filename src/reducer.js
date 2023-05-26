import { ADD_TODO, TOOGLE_TODO } from "./actionTypes";


const initialState = {
    todos: []
}

const reducer = (state= initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case ADD_TODO:
            console.log('payload', payload)
            return  {
                ...state,
                todos: [...state.todos, payload]
            }
            case TOOGLE_TODO:
                console.log('payload', payload)
                return {
                    ...state,
                    todos: state.todos.map((todo) => todo.id === payload ? {...todo, isCompleted: !todo.isCompleted} : todo),
        }
    default:
        return state;
    }
}

export default reducer




