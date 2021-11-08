import axios from "axios"
import { useEffect, useState } from "react"


function Digimon(){
    let [digimon,setDigimon]=useState([])

    console.log(digimon)
    useEffect(()=>{
        console.log('useefeck')
        axios("https://digimon-api.vercel.app/api/digimon" )
        .then((result)=>setDigimon(result.data))
    },[])
    return(
        <>
        <h2>data digimon</h2>
        {digimon.map((item)=>(
            <> 
            <h3>{item.name}</h3>
            <img src={item.img} width={50}/>
            </>
            
        ))}
        </>
    )
}
export default Digimon