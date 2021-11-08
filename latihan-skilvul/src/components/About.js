function About (){
    
const user =localStorage.getItem("user");
const userObj = JSON.parse(user);
console.log(user)
console.log(userObj)
    return(
        <>
        <h3>my Name {userObj.nama}</h3>
        </>
    )
}
export default About