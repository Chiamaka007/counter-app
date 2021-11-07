import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter";



function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div className="wrapper">
        <h1> {count}</h1>

        <div className="btn">
          <button onClick={() => dispatch(decrement())}>minus</button>
          <button onClick={() => dispatch(increment())}>add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
