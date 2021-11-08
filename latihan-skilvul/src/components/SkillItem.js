function Skillitem(x){
    let {  skills}=x
    return(
        <div class="skill-item"
        
        onClick = {()=> alert(skills.name)}
        >
       
       <>
            <h3>{skills.name}</h3>
           
            <img src={skills.img} alt="" width="200" />
       </>

        

       </div>

    )
}
export default  Skillitem