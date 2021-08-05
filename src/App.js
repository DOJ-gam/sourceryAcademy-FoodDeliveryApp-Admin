import React,{useState,useEffect} from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Orders from "./components/orders/Orders";
import Restaurants from "./components/restaurants/Restaurants";
import Category from "./components/category/Category";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AdminPrivateRoute from "./components/AdminPrivateRoute/AdminPrivateRoute";
import Page403 from "./components/errors/Page403";
import Page404 from "./components/errors/Page404";
import EditCategory from "./components/category/EditCategory";
import AddProduct from "./components/products/addproduct/AddProduct";

import axios from "axios"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";

import "./App.css";


axios.defaults.baseURL = "http://localhost:300";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['content-type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {

  const[name, setName]= useState('');

  let url = process.env.NODE_ENV === "development"?
        process.env.REACT_APP_DEVELOPMENT_URL : 
        process.env.REACT_APP_PRODUCTION_URL;

        const getUser = async () => {
          let res = await fetch(url + 'Auth/user',{
            headers : {'content-type' : 'application/json'},
            credentials: 'include',
          })
          let content = await res.json();
          setName(content.name);
          console.log(name);
        } 

  useEffect(()=>{
    getUser();
  });

  // let location = useLocation;
  // if (location.pathname === '/register'){
  //   return( <div className="App">
  //     <Router>
  //       <Route path="/register">
  //         <Register />
  //       </Route>
  //     </Router>
  //   </div>
  //   );
  // }
  return (
    <div className="App pr-5">
       
      <Router>
      
        <Switch>
         
           
          {/* <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route> */}
           <Route path="/register">
            {name ? <Redirect to="/"/> : <Register/>}
          </Route> 
            <Route path="/403">
            <Page403/>
          </Route>
          <Route path="/404">
            <Page404 />
          </Route>
          <AdminPrivateRoute path="/register" name="Admin"/>

          <Route path="/login" >
          {localStorage.getItem('auth_token') ? <Redirect to="/"/> : <Login/>}
          </Route>
          {/* {name ? : <Redirect to='/login' />} */}
          <div className="auth-routes">
            <Topbar />
            <div className="container-doj">
              <Sidebar />
              {/* name ? */}
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="/restaurants">
                <Restaurants />
              </Route>
              <Route path="/category">
                <Category />
              </Route>
              <Route path="/edit-category/:id">
                <EditCategory />
              </Route>
              <Route path="/addfood">
                <AddProduct />
              </Route>
               {/* : <Redirect to="/login" />  */}
            </div>
          </div>
             
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
