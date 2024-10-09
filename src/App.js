import React from 'react';
import './App.css';
import Mydata from './Component/Mydata';
import UserProvider from './Context/Userprovider';
import Userprovider2 from './Context2/Userprovider2';
import Mydata2 from './Component/Mydata2';

function App() {
  return (
    <>
     {/* <UserProvider>
       <Mydata />
     </UserProvider> */}

    <Userprovider2>

      <Mydata2></Mydata2>
      
    </Userprovider2>
    </>
  );
}

export default App;

