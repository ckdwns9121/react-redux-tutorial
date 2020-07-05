import React from 'react';
import {connect} from 'react-redux';
import {change_input, insert,toggle,remove} from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer =({input,todos,onChangeInput,onInsert,onToggle,onRemove}) =>{
    return(
        <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle ={onToggle}
        onRemove={onRemove}
        ></Todos>
    )
}

const mapStateToProps =(state)=>({
    input : state.todos.input,
    todos :state.todos.todos
})

const mapDispatchToProps =(dispatch) =>({
    onChangeInput : (input) =>dispatch(change_input(input)),
    onInsert :(text) =>dispatch(insert(text)),
    onToggle : (id) => dispatch(toggle(id)),
    onRemove : (id) =>dispatch(remove(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodosContainer);

// export default connect(
//     ({todos}) =>({
//         input :todos.input,
//         todos : todos.todos,
//     }),
//     {
//         change_input,
//         insert,
//         toggle,
//         remove
//     }
// )(TodosContainer);