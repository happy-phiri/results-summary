import React from "react";
import Result from "./components/Result";
import Summary from "./components/Summary";
import data from "./data";

function App() {
  return (
    <main>
      <div className="wrapper">
        <Result />
        <Summary data={data} />
      </div>
    </main>
  );
}

export default App;
