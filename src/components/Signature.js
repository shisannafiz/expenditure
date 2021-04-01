import React from 'react';
import cheese from './cheese.png';

const Signature = () => {
  return (
    <div className="signature">
      <h6 className="myname">Created by Shisan Nafiz &nbsp;</h6>
      <img src={cheese} alt="" className="cheese" />
    </div>
  );
};

export default Signature;
