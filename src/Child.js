import React from 'react';
import './App.css';

function Child(data) {
  return (
    <div>
      Child number: {data.num}
    </div>
  );
}

export default Child;
