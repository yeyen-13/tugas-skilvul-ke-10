import {useState} from 'react'


function Login(){

let [username,setUsername]= useState("")
let [password, setPassword]= useState("")

let handleChangeUsername =(event)=>{
    setUsername(event.target.value)
}

let handleChangePassword = (event)=>{
    setPassword(event.target.value)
}

   console.log(username,password)

    return(
        <>
        <input type="text" value={username} name =" username" onChange = {handleChangeUsername} />
        <input type="number" value={password} name= " password"
         onChange={handleChangePassword}
        />
        <button onClick={()=>(console.log(username,password))}>Login</button>
        </>
    )
}
export default Login