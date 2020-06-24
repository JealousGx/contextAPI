import React, { useContext, useReducer } from 'react';
import './App.css';
import numReducer from './valueReducer';

function Child2(data) {
    let [state, action] = useReducer(numReducer, 67);
  return (
    <div>
      Child 2: {state}<br/>
      <button onClick={() => action({value: "INCREMENT"})}>Increment</button>
      <button onClick={() => action({value: "DECREMENT"})}>Decrement</button>
    </div>
  );
}

export default Child2;
