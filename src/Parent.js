import React from 'react';
import './App.css';
import Child from './Child';

function Parent(data) {
  return (
    <div>
      This is parent.js
      <Child num = {data.number}></Child>
    </div>
  );
}

export default Parent;
