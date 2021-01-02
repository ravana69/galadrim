import Letter from "./component/Letter";

import { useState } from "react";

function App() {
  const [cptRender, setCptRender] = useState(0);
  return (
    <div className="app">
      <Letter key={cptRender} setterCpt={setCptRender} cpt={cptRender} />
    </div>
  );
}

export default App;
