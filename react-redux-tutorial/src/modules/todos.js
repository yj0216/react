import { createAction, handleAction } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
let id = 3;
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        }
        ,
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
}



// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// });

// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// });

// export const toggle = id => ({
//     type: TOGGLE,
//     id
// })

// export const remove = id => ({
//     type: REMOVE,
//     id
// })

// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             }
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo=>
//                     todo.id === action.id ? {...todo,done:!todo.done} : todo)
//             }
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         default:
//             return state;
//     }
// }

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, text => ({ id: id++, text, done: false }));
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const todos = handleAction({
    [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [INSERT]: (state, action) => ({ ...state, todos: state.todos.concat(action.payload) }),
    [TOGGLE]: (state, action) => ({ ...state, todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo) }),
    [REMOVE]: (state, action) => ({ ...state, todos: state.todos.filter(todo => todo.id !== action.id) })
},
    initialState,
);

export default todos;