import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from "sweetalert";
export default function Topbar() {
  
  const history = useHistory();
  const logoutSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/logout`).then(res =>{
      if(res.data.status === '200'){
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_name')
        swal("Success", res.data.message, "success")
        history.push('/');
      }
    });
  }

  var AuthButtons = '';
  if(!localStorage.getItem('auth_token')){
    AuthButtons = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link>
           <div className="dropdown-menu mr-5 float-left text-center" aria-labelledby="dropdownMenuLink">
              <h3 className="border-bottom ">Not A USER</h3>
              <a className="dropdown-item" href="/">
                Login
              </a>
            </div>
          </Link>
        </li>
      </ul>
    );
  }
  else{
    AuthButtons = (
      <div className="dropdown-menu mr-5 float-left text-center" aria-labelledby="dropdownMenuLink">
        <h3 className="border-bottom py-3">Omar Jeng</h3>
        <li className="dropdown-item" href="/">
          <h6 className="nav-link cursor-pointer" onClick={logoutSubmit}>Logout</h6>
        </li>
      </div>
    );
  }
  
  return (
    <div className="topbar mb-4" >
      <div className="topbarWrapper">
        <div className="topLeft  ">
          <span className="logo">
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg"
              alt=""
              className="topAvatar"
            /> */}
            <FastfoodIcon  fontSize="large" />
            
          </span>
          <h3 className="text-danger fw-bold fs-1 ls-2 ">
                        Senegambia
                        <span className="text-success ms-2">Foodie</span>
                    </h3>
         
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="dropdown show">
            <a
              className="dropdown-toggle"
              href="/"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="https://media-exp3.licdn.com/dms/image/C4E03AQGRDyM4U3VQ6g/profile-displayphoto-shrink_200_200/0/1538780614697?e=1631145600&v=beta&t=r-pJ7kc1SErdm-22AoF6QwFQWSuwse-yqSuhcXp7MZ0"
                alt=""
                className="topAvatar"
              />
            </a>

            {/* <div class="dropdown-menu mr-5 float-left text-center" aria-labelledby="dropdownMenuLink">
              <h3 className="border-bottom py-3">Omar Jeng</h3>
              <a class="dropdown-item" href="/">
                Logout
              </a>
            </div> */}
            {AuthButtons}
          </div>
        </div>
      </div>
    </div>
  );
}
