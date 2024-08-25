import React, { useState } from "react";
import BfhlForm from "./components/BfhlForm";
import ResponseDisplay from "./components/ResponseDisplay";

function App() {
  const [response, setResponse] = useState(null);

  return (
    <div className="App">
      <h1>ABCD123</h1> {/* Replace with actual roll number */}
      <BfhlForm setResponse={setResponse} />
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}

export default App;
