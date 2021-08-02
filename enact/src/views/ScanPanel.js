// import Webcam from "react-webcam";
// // import { useRef } from "react";
// function App(){
//   return (
//     <div className ="App">
//       <Webcam/>
//     </div>
//   );
// }
<<<<<<< HEAD
// export default App;
     /* eslint-disable-next-line*/
import React, { useState } from "react";
import Scanner from "../components/Scanner.js";
import ReactDOM from "react-dom";
import Button from "@enact/sandstone/Button"
=======
// export default App;\
// eslint-disable-next-line
import React, { useState } from 'react';
import Scanner from '../components/Scanner.js';
import ReactDOM from 'react-dom';
import Button from '@enact/sandstone/Button';
>>>>>>> ef44d984c9c55680de1c47d47ebaa3820a1cd434

import './ScanPanel.css';

function ScanPanel() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
<<<<<<< HEAD
     /* eslint-disable-next-line*/
=======
  // eslint-disable-next-line
>>>>>>> ef44d984c9c55680de1c47d47ebaa3820a1cd434
  const onDetected = result => {
    setResult(result);
  };

  return (
    <div className="App">
      <p>{result ? result : 'show the barcode'}</p>
      {/* <div>{setCamera(!camera)}</div> */}
<<<<<<< HEAD
      {/* eslint-disable-next-line*/}
      <Button size='small' onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </Button>
      {/* eslint-disable-next-line*/}
=======
      {/* eslint-disable-next-line */}
      <Button size="small" onClick={() => setCamera(!camera)}>
        {camera ? 'Stop' : 'Start'}
      </Button>
      {/* eslint-disable-next-line */}
>>>>>>> ef44d984c9c55680de1c47d47ebaa3820a1cd434
      <div className="container">
        {/* eslint-disable-next-line */}
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<ScanPanel />, rootElement);
export default ScanPanel;
