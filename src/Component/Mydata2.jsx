import React, { useContext, useEffect } from 'react'
import UserContext2 from '../Context2/Usercontext2';
import Show from './Show';

function Mydata2() {
    const {data}=useContext(UserContext2);
    const {setData}=useContext(UserContext2);
    const {store}=useContext(UserContext2);
    const{setStore}=useContext(UserContext2);
    console.log(data);
    useEffect(()=>{
      
    })
    
const submitdata=(e)=>{
    // e.preventdefault();
    e.preventDefault()
    const copy = [...store];
    copy.push(data);
    setStore(copy);


}
const inputHandle=(e)=>{
   setData({...data,[e.target.name]: e.target.value});

}


  return (
    <>
    <form action=""onSubmit={submitdata}>
    <input type="text" name='name' value={data.name} onChange={inputHandle} />
    <input type="text" name='email' value={data.email} onChange={inputHandle}/>
    <button type='submit' >submit</button>
    </form>
 
  

    <Show/>
    </>
  )
}

export default Mydata2