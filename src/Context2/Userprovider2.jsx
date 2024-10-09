import React, { useState } from 'react'
import UserContext from '../Context/UserContext'
import UserContext2 from './Usercontext2'

function Userprovider2({children}) {
    const [data,setData]=useState({
        name:"NAME",
        email:"EMAIL",
        // password:""

    })
    const [store,setStore]=useState([])
  return (
<>
<UserContext2.Provider value={{data,setData,store,setStore}}>
    {children}
</UserContext2.Provider>
</>
  )
}

export default Userprovider2