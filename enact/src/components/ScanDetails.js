// eslint-disable-next-line
import React from 'react';
//import { v4 as uuidv4 } from "react";

const ScanDetails = ({ name, barcode, expirationDate, classify}) => {
  return (
    <div className='Product'>
        <h3>{name}</h3>
        <ol>
            <li>{barcode}</li>
            <li>{expirationDate}</li>
            <li>{classify}</li>
        </ol>
    </div>
  );
};
export default ScanDetails;

