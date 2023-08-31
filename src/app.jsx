import React from "react";
import Screen from "./loginscreen";

var loginState = false;
function App() {
  return (
    <div className="container">
      {loginState === true ? <h1>You are already login</h1> : <Screen />}
    </div>
  );
}

export default App;
