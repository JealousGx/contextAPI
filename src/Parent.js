import React from 'react';
import './App.css';
import Child from './Child';
import Child2 from './Child2';

function Parent(data) {
  return (
    <div>
      This is parent.js
      <Child></Child><br/>
      <Child2></Child2>
    </div>
  );
}

export default Parent;
