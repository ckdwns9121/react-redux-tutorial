import React from 'react';
import {connect} from 'react-redux'
import Counter from '../components/Counter';
import {increment , decrement} from '../modules/counter'
import {hello} from '../modules/todos';

const CounterContainer =({number, increment, decrement, hello})=>{
    return<Counter number={number} onIncrement={increment} onDecrement={decrement} onHello={hello}/>
}

const mapStateToProps =(state) =>({
    number :state.counter.number,
});

const mapDispatchToProps =(dispatch) =>({
    onIncrement :() =>dispatch(increment()),
    onDecrement :() =>dispatch(decrement()),
    onHello :() =>dispatch(hello())
});

export default connect(
    state=>({
        number :state.counter.number,
    }),
    {
        increment,
        decrement,
        hello
    }
)(CounterContainer);


//export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);