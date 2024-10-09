import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Mydata() {
  const data = useContext(UserContext);
  console.log(data);

  return (
    <div>{data}</div>
  );
}

export default Mydata;
