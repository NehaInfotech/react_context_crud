import React from 'react';
import UserContext from './UserContext';

const data =  "John Doe";

function UserProvider({ children }) {
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
