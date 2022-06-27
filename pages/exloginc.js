import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


function Exlogin() {
    const [useid, setUseid] = useState('')
    const [usepwd, setUsepwd] = useState('')
    const history = useHistory();
    useEffect(() => {
      if (localStorage.getItem('user-info')) {
            history.push('/main')
      }
    }, [])
    
    async function login(){
        console.warn(useid, usepwd)
        let item = {useid, usepwd};
        let logIn = await fetch("http://172.17.72.128:8000/db2_sp",{
          method:'POST',
          headers:{
            "Content-Type":"application/json",
            "Accept":'application/json'
          },
          body:JSON.stringify(item)    
        })
        
        logIn = await logIn.json();
        localStorage.setItem('user-info' ,JSON.stringify(logIn))
        history.push('/main')
    }
    
  return (
    <div>
        <h1>login page</h1>
        <input type='text' placeholder='ID'
        onChange={(e)=>setUseid(e.target.value)}/>
        <br/>
        <input type='password' placeholder='PWD'
        onChange={(e)=>setUsepwd(e.target.value)}/>
        <br/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Exlogin