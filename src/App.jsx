import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SampleState from "./Components/SampleState";
import { Counter } from "./Components/Counter";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">SampleState</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SampleState />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
