import React, {useState} from 'react';
import './App.css';
import Parent from './Parent.js';

function App() {
  let [num, setNum] = useState(24);
  return (
    <div>
      <Parent number = {num}></Parent><br/>
      <button onClick = {() => setNum(++num)}>Increase number</button>
    </div>
  );
}

export default App;
