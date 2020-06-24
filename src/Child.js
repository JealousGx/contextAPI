import React, { useContext } from 'react';
import './App.css';
import contextValue from './contextValue';

function Child(data) {
    let value = useContext(contextValue);
    let updateValue = () => value[1](++value[0]);
  return (
    <div>
      Child number: {value[0]}<br/>
      <button onClick={() => updateValue()}>Increase</button>
    </div>
  );
}

export default Child;
