// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
// import Login from './components/Form/Login';
import Login2 from "./components/Form/Login2";
import Block from "./components/Block";
import Hobbies from "./components/Hobbies";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Todo from "./components/Todos/Todo";
import About from "./components/About";
import Register from "./components/Register/Register";
import Pokemon from "./components/Pokemon";
import Digimon from "./components/Digimon";
import Herypoter from "./components/Herypoter";

function App() {
  let [isLogin, setIsLogin] = useState(false);
  useEffect(() => {}, [isLogin]);

  let user = {
    nama: "",
    alamat: "",
  };
  console.log(user);
  let userJSON = JSON.stringify(user);
  console.log(userJSON);

  localStorage.setItem("user", userJSON);

  return (
    <Router  >
      {/* <ul>
        <li><Link to="/javascript">JavaScript</Link></li>
        <li><Link to="/Css">css</Link></li>
      </ul> */}
      <>
        <Pokemon />
      </>
      <br />
      {/* <Digimon/> */}
      {/* <Redirect to="/"/> */}
      <Link to="/">Home</Link> <br />
      <Link to="/Herypoter">Herypoter</Link> <br />
      <Link to="/Profile">Profile</Link> <br />
      <Link to="/Hobby">Hobby</Link> <br />
      <Link to="/Skills">Skills</Link> <br />
      {/* { !isLogin && ( */}
      <Link to="/Login">Login</Link> <br />
      {/* )} */}
      <Link to="/about">about</Link> <br />
      <Link to="/Todo">Todo</Link> <br />
      <Link to="/Register">Register</Link> <br />
      <Switch>
        <Route exact path="/">
          <h1>halaman Home</h1>
        </Route>

        <Route path="/Profile">
          <h1>halaman Profile</h1>
          <Profile />
        </Route>

        <Route path="/Herypoter">
          <h1>herypoter</h1>
          <Herypoter />
        </Route>

        <Route path="/Hobby">
          <h1>halaman Hobby</h1>
          <Hobbies />
        </Route>

        <Route path="/Skills">
          <h1>halaman Skills</h1>
          <Skills />
        </Route>

        <Route path="/Register">
          <h1>halaman Register</h1>
          <Register setIsLogin={setIsLogin} />
        </Route>

        <Route path="/Login">
          <h1>halaman Login</h1>
          {/* <Login /> */}
          <Login2 />
        </Route>

        <Route path="/about">
          <About />
          <h1>halaman about</h1>
          <p>
            It sets up your development environment so that you can use the
            latest JavaScript features, provides a nice developer experience,
            and optimizes your app for production. You’ll need to have Node
          </p>
        </Route>

        <Route path="/Todo">
          <h1>halaman Todo</h1>
          {/* {isLogin ? <Todo /> : <Redirect to="/Login" />} */}
          <Todo />
        </Route>

        {/* route dinamis */}
        <Route path="/:namaBlock">
          <Block />
        </Route>
        <Route path="/:namaBlock">
          <Block />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
