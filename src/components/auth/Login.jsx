import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert';


//handleInput is called everytime chage is made...
// setting values entered to the variable in state..s
function Login(){

    const history = useHistory();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });
    const handleInput = (e) =>{
        // e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }
        axios.post(`http://127.0.0.1:8000/api/login`, data).then(res =>{
            
            if(res.data.status === '200'){
                localStorage.setItem('auth_token', res.data.token)
                localStorage.setItem('auth_name', res.data.username)
                swal("Success", res.data.message, "success")
                if(res.data.role === '1'){

                    history.push('/');
                }
                else{
                    history.push('/404');   
                }
            }
            else if(res.data.status === 401){
                swal("Warning", res.data.message, "warning")
            }   
            else{
                setLogin({...loginInput, error_list: res.data.validation_errors})
            }

        })
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    
                                    <div className="form-group mb3">
                                        <label htmlFor="email">Email ID</label>
                                        <input type="email" onChange={handleInput} value={loginInput.email} className="form-control" name="email" id="email" />
                                        <span className=" alert-danger d-inline-block my-1 w-100 text-danger">{loginInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb3">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" onChange={handleInput} value={loginInput.password} className="form-control" name="password" id="password" />
                                        <span className=" alert-danger d-inline-block my-1 w-100 text-danger">{loginInput.error_list.password}</span>
                                    </div>
                                    
                                    <div className="form-group mb3">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;