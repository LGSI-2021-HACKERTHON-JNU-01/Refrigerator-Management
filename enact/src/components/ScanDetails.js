// eslint-disable-next-line
import React from 'react';
//import { v4 as uuidv4 } from "react";

const ScanDetails = ({ name, barcode, expirationDate }) => {
  return (
    <div className="Product">
      <h3>{name}</h3>
      <p>
        <span>BARCODE : </span>
        {barcode}
      </p>
      <p>
        <span>EXPIRATION DATE : </span>
        {expirationDate}
      </p>
    </div>
  );
};
export default ScanDetails;
