import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { Text, View, Image} from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import SideNav from '../Form/SideNav'
import "bootstrap/dist/css/bootstrap.min.css";
import docc from"../img/doc.png";
import diss from"../img/dis.jpg";
import logo from '../img/12.png';
import logo1 from '../img/13.png';
const Login = (props) => {
  let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.6, 0],
      scale: [.1, 0.9],
      position: "all",
      color: [ "#ff0000"],
      cross: "dead",
      random: 10
    };
    useEffect(() => {
    }, [props.loggedUser])
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();



  const handleUsernameChange = (text) => {
    setUsername(text.target.value)

  }

  const handlePasswordChange = (text) => {
    setPassword(text.target.value)

  }

  const handleSubmit = (e) => {
    const values = {
      username: username,
      password: password
    }
    e.preventDefault();
    props.login(values);
    console.log(values)
    console.log(localStorage.getItem("loggedUser"))
  }

  return (
    <section className="landing-background109">
<div ><div><div style={{
        width: "200px",
        height: "100px",
      }} ></div></div>
<div class="container p-200 " >
<div class="row p-2">
<div class="col-sm-3 container"><img src={logo1} width="250" height="250" /> </div>
<div class="col-sm-3 container">
<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
      </div>

      {(props.loggedUser !== null) && typeof (props.loggedUser) !== 'string' && (props.navigation.navigate("Home"))}
      

      <section class="login-block">
    <div class="container">
  <div class="row">
    <div >
        <h2 class="text-center">Login User </h2>
        
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Username</label>
    <input type="text" class="form-control" onChange={handleUsernameChange} placeholder=""/>
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1" class="text-uppercase">Password</label>
    <input type="password" class="form-control" onChange={handlePasswordChange} placeholder=""/>
  </div>
  
  
    <div class="form-check">
    
    <button type="submit" class="btn btn-in float-right" onClick={handleSubmit}>Se connecter</button>
  </div>
<div class="copy-text">Copyright 2021 All rights reserved |<i class="fa fa-heart"></i> <a href="http://grafreez.com">yobitrust</a></div>
    </div>
    
</div>
</div>
</section>
</div>
<div class="col-sm-3 container"><img src={logo} width="250" height="250" /> </div>        
       
  
  
  </div>
</div>
    </div>
    
    </section>
  );
};


const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  login: actions.login,
};
export default connect(mapStateToProps, mapActionToProps)(Login);

