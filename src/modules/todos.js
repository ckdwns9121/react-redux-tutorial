
import produce from 'immer';
import {createAction, handleActions} from 'redux-actions';
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";
const TOGGLE = "todos/TOGGLE";
const HELLO = "HELLO";

let id =0;

export const change_input = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, (text) => ({
    text,
    id:id++
}));
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
export const hello =createAction(HELLO);


const initialState = {
    input: '',
    todos: []
}



export default handleActions( 
    {
    [CHANGE_INPUT] :(state, action) =>
        produce(state,draft =>{
            draft.input = action.payload;
        }),
    
    [INSERT] :(state , action)=>{
        const todo={
            id : action.payload.id,
            text : action.payload.text,
            checked :false
        }
        return produce(state, draft =>{
            draft.todos.push(todo);
        })
    },
    [REMOVE] :(state,action) =>{
        return produce(state,draft=>{
            draft.todos.splice(draft.todos.findIndex(todo=>todo.id ===action.payload),1);
        })
    },
    // [TOGGLE]: (state, { payload: id }) => {
    //     // 인덱스 가져와서
    //     const index = state.todos.findIndex(item => item.id === id);
    //     return produce(state, draft => {
    //       // 그냥 반전시키기!
    //       draft.todos[index].checked = !draft.todos[index].checked;
    //     });
    //   },
    [TOGGLE] : (state,action) =>{
        const index = state.todos.findIndex(todo=>todo.id ===action.payload);
        console.log(action.payload);
        return produce (state,draft=>{
            draft.todos[index].checked = ! draft.todos[index].checked;
        })
    }
  },
  initialState
);


// //input 액션 생성자.
// export const change_input = (input) => ({
//     type: CHANGE_INPUT,
//     input
// });
// let id = 3;

// // 일정을 insert하는 액션 생성자
// // text값을 파라미터로 받아 추가
// export const insert = (text) => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// });

// // 일정을 remove하는 생성자
// // id값을 파라미터로 받아 삭제
// export const remove = (id) => ({
//     type: REMOVE,
//     id,
// })

// //
// export const toggle = (id) => ({
//     type: TOGGLE,
//     id,
// })
// export const hello =()=>({
//     type:HELLO,
// })

// function todos(state = initialState, action) {
//     console.log("투두 리듀서");
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
//                 todos: state.todos.map(todo =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo
//                 )
//             }
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         case HELLO:
//             console.log("hello");
//         default:
//             return state;
//     }
// }

//export default todos;
