import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import FirstComponent from "./components/FisrtComponent";
import TemplateExpression from "./components/FUNDAMENTOS/TemplateExpressions";
import Events from "./components/FUNDAMENTOS/Events";
import Challenge from "./components/FUNDAMENTOS/Challenge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpression />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
