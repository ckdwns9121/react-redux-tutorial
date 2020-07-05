import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

import Todos from './components/Todos';

const App = () =>{
  return(
    <div>
      <h1>일정관리</h1>
    {/* <CounterContainer/> */}
    <TodosContainer></TodosContainer>
    </div>
  )
}
export default App;
