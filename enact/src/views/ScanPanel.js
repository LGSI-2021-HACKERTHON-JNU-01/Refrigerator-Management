// import Webcam from "react-webcam";
// // import { useRef } from "react";
// function App(){
//   return (
//     <div className ="App">
//       <Webcam/>
//     </div>
//   );
// }
// export default App;\
// eslint-disable-next-line
import React, { useState } from 'react';
import Scanner from '../components/Scanner.js';
import ReactDOM from 'react-dom';
import Button from '@enact/sandstone/Button';

import './ScanPanel.css';

function ScanPanel() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  // eslint-disable-next-line
  const onDetected = result => {
    setResult(result);
  };

  return (
    <div className="App">
      <p>{result ? result : 'show the barcode'}</p>
      {/* <div>{setCamera(!camera)}</div> */}
      {/* eslint-disable-next-line */}
      <Button size="small" onClick={() => setCamera(!camera)}>
        {camera ? 'Stop' : 'Start'}
      </Button>
      {/* eslint-disable-next-line */}
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
