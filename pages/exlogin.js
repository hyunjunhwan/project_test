import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


function Exlogin() {
    const [useid, setUseid] = useState('')
    const [usepwd, setPwd] = useState('')
    const history = useHistory();
    
    async function login(){
        console.warn(useid, usepwd)
        let item = {useid, usepwd};
        let logIn = await axios.patch("http://172.17.72.128:8000/db2_sp",{
            p_language :"",
            p_plant: "P100",
            p_user: "user99",
            p_pgm: "sp_mobile_com_login",
            p_option: {
                input_user: "10051004",
                input_pass: "1234",
            },  
        });
        console.log(logIn.config.data);
        const result = logIn.config.data;
        return result;
        
    }
    
  return (
    <div>
        <h1>login page</h1>
        <input type='text' placeholder='ID'
        onChange={(e)=>setUseid(e.target.value)}/>
        <br/>
        <input type='password' placeholder='PWD'
        onChange={(e)=>setPwd(e.target.value)}/>
        <br/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Exlogin