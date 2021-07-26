// import Webcam from "react-webcam";
// // import { useRef } from "react";
// function App(){
//   return (
//     <div className ="App">
//       <Webcam/>
//     </div>
//   );
// }
// export default App;
import React, { useState } from "react";
import Scanner from "../components/Scanner.js";
import ReactDOM from "react-dom";
import Button from "@enact/sandstone/Button"

import "./ScanPanel.css";

function App() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
  };

  return (
    <div className="App">
      <p>{result ? result : "show the barcode"}</p>
      {/* <div>{setCamera(!camera)}</div> */}
      <Button size='small' onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </Button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

