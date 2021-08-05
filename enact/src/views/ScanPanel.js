import Scanner from '../components/Scanner.js';
import ReactDOM from 'react-dom';
import Button from '@enact/sandstone/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './ScanPanel.css';
import ScanDetails from '../components/ScanDetails.js';
import ScanInput from '../components/ScanInput.js';
import ScanTag from '../components/ScanTag.js';

function ScanPanel() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(''); //null

  const [BAR_CD, setData] = useState('');
  const [query, setQuery] = useState(''); //8809359120061
  const open_url =
    'http://openapi.foodsafetykorea.go.kr/api/sample/C005/json/1/5/BAR_CD=' +
    query;

  const [PRDLST_NM, setPRDLST_NM] = useState('');
  const [POG_DAYCNT, setPOG_DAYCNT] = useState('');

  // eslint-disable-next-line
  const onDetected = result => {
    setResult(result);
    setQuery(result);
  };

  useEffect(() => {
    let completed = false; //query, Variables to ensure search results are complete
    const get = async () => {
      if (!completed) {
        // if(query!==''){
        let respon = await axios(open_url);
        if (respon.data.C005.RESULT.CODE === 'INFO-000') {
          // setData(respon.data.C005.row[0]);
          setData(respon.data.C005.row[0].BAR_CD);
          setPRDLST_NM('<' + respon.data.C005.row[0].PRDLST_NM + '>');
          setPOG_DAYCNT(respon.data.C005.row[0].POG_DAYCNT);
        } else {
          // setAlert('');
          setData(result);
          setPRDLST_NM('No match data');
          setPOG_DAYCNT('');
        }
      }
    };
    get();
    return () => {
      completed = true;
    };
  });

  // const handleChange = ({target:{value}}) => setDate(value)
  return (
    <div className="App2">
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
      <div className="Product">
        <ScanDetails
          name={PRDLST_NM}
          barcode={BAR_CD}
          expirationDate={POG_DAYCNT}
        />
      </div>
      <ScanInput/>
      <ScanTag/>
    </div>
  );
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<ScanPanel />, rootElement);
export default ScanPanel;
