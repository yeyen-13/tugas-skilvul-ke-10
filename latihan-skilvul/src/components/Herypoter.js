import axios from "axios"
import { useEffect, useState } from "react"


function Herypoter(){
let[herypoter,setHerypoter]= useState()


useEffect(()=>{
    axios ("http://hp-api.herokuapp.com/api/characters")
    .then((result)=>setHerypoter(result.data))
},[])
console.log(herypoter)
    return(
        <>
        <h2>ini data herypoter saya</h2>
        {herypoter.map((data)=>(
            <div>
                 <h3>{data.name}</h3>
                 {/* <h5>{data.dateOfBirth}</h5> */}
            <img src={data.image}/>
            </div>
           
        ))}
        </>
    )
}
export default Herypoter