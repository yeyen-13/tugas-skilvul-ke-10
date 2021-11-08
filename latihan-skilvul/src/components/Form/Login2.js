import { useState } from "react"; 
import {useHistory} from 'react-router-dom'
function Login2() {

  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  let handleChangeUser = (event) => {
    //   menggunakandestructr= cara untuk memecahkkan bagian dari array atau objeck
    let { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  let history = useHistory()
  let handleLogin =(e)=>{
    e.preventDefault()
    // setIsLogin(true)
    history.push("/")
  }

  console.log(user);
  return (
    <>
      <input
        type="text"
        onChange={handleChangeUser}
        name="username"
        value={user.username}
      />
      <input
        type="passwoard"
        onChange={handleChangeUser}
        name="password"
        value={user.password}
      />
      <button onClick={handleLogin
        // () => console.log(user.username , user.password)
        }>
        login
      </button>
    </>
  );
}
export default Login2;
