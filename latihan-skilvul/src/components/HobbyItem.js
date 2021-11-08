function HobbyItem(x){
    let { hobbies}=x
    return(
        <div class="hobby-item"
        
        onClick = {()=> alert(hobbies.name)}
        >
       
       <>
            <h3>{hobbies.name}</h3>
           
            <img src={hobbies.img} alt="" width="200" />
       </>

        

       </div>

    )
}
export default HobbyItem