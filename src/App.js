import "./styles.css";
import { useState } from "react";

import CallbackDeps from "./CallbackDeps.js";
export default function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Toggle</button>
      {state && <CallbackDeps />}
    </div>
  );
}
