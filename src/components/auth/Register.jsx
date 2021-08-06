import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function Register() {
  let url =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEVELOPMENT_URL
      : process.env.REACT_APP_PRODUCTION_URL;

  const history = useHistory();
  const [registerInput, setRegister] = useState({
    firsName: "",
    lastName: "",
    email: "",
    password: "",

    error_list: [],
  });

  const handleInput = (e) => {
    // e.presist();
    // e.persist();
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };
  // const registerSubmit = (e) =>{
  //     e.preventDefault();

  //     const data = {
  //         name: registerInput.name,
  //         email: registerInput.email,
  //         password: registerInput.password
  //     }
  //     axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
  //         // Login...
  //         axios.defaults.withCredentials = true;
  //         axios.post(`http://127.0.0.1:8000/api/register`, data).then(res =>{
  //     //   Note the the data.status is set manually in backend...
  //         if (res.data.status === "200"){
  //             localStorage.setItem('auth_token', res.data.token);
  //             localStorage.setItem('auth_name', res.data.username);
  //             // swal("Success", res.data.message, "success");
  //             // collor, message, icon
  //             swal({
  //                 title: "Success!",
  //                 text: res.data.message,
  //                 icon: "success",
  //               });
  //             history.push('/');
  //         }
  //         else{
  //             //validation_errors also from backend
  //             setRegister({...registerInput, error_list: res.data.validation_errors});
  //         }
  //         });
  //     });
  // }

  const registerSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(url + "api/Auth/Register", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerInput),
      credentials: "include",
    });
    const content = await res.json();
    console.log(content);
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form onSubmit={registerSubmit}>
                  <div className="form-group mb3">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      onChange={handleInput}
                      value={registerInput.name}
                      className="form-control"
                      name="name"
                      id="name"
                    />
                    <span className=" alert-danger d-inline-block my-1 w-100 text-danger">
                      {registerInput.error_list.name}
                    </span>
                  </div>
                  <div className="form-group mb3">
                    <label htmlFor="email">Email ID</label>
                    <input
                      type="email"
                      onChange={handleInput}
                      value={registerInput.email}
                      className="form-control"
                      name="email"
                      id="email"
                    />
                    <span className=" alert-danger d-inline-block my-1 w-100 text-danger">
                      {registerInput.error_list.email}
                    </span>
                  </div>
                  <div className="form-group mb3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      onChange={handleInput}
                      value={registerInput.password}
                      className="form-control"
                      name="password"
                      id="password"
                    />
                    <span className=" alert-danger d-inline-block my-1 w-100 text-danger">
                      {registerInput.error_list.password}
                    </span>
                  </div>
                  {/* <div className="form-group mb3">
                                        <label htmlFor="confirm_password">Confirm Password</label>
                                        <input type="password" onChange={handleInput} value={registerInput.confirm_passwordpassword} className="form-control" name="confirm_password" id="confirm_password" />
                                    </div> */}
                  <div className="form-group mb3">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
