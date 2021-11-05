import "./App.css";
import {useState} from 'react';



function App() {
  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <div className="wrapper">

      <h1> {counter}</h1>

        <div className="btn">
          <button onClick={() => setCounter(counter - 1)}>minus</button>
          <button onClick={() => setCounter(0)}>reset</button>
          <button onClick={() => setCounter(counter + 1)}>add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
