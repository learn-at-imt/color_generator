import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(true);

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form>
          <input
            type="text"
            placeholder="type color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Get Colors
          </button>
        </form>
      </section>
    </>
  );
}

export default App;

//import useState hook
//the useState is used here to store the values in the input
