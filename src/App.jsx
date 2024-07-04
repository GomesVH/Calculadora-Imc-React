// App.jsx
import React from "react";
import Header from "./components/Header";
import Imc from "./components/Imc";

function App() {
  return (
    <div>
      <div className="text-center">
        <Header />
        <Imc />
      </div>
    </div>
  );
}

export default App;