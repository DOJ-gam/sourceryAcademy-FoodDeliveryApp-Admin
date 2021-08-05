import React, {useState} from "react";
import axios from 'axios';
import {Redirect, useHistory} from 'react-router-dom'
import swal from 'sweetalert';


//handleInput is called everytime chage is made...
// setting values entered to the variable in state..s
function Login(){
    let url = process.env.NODE_ENV === "development"?
        process.env.REACT_APP_DEVELOPMENT_URL : 
        process.env.REACT_APP_PRODUCTION_URL;

    const history = useHistory();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });
    const [redirect, setRedirect] = useState(false);

    const handleInput = (e) =>{
        // e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = async (e) => {
         e.preventDefault();

         
        
        // let res = await fetch(url +'Auth/Authenticate/',{
        //     method: 'POST',
        //     headers:{'Content-type':'application/json'},
        //     body:JSON.stringify(loginInput),
        //     credentials:'include'
        // });
        // let data = await res.json();
        // console.log(data);

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        let res = await fetch(url + 'Auth/login',{
            method:'POST',
            headers : {'Content-Type' : 'application/json'},
            credentials: 'include',
            body : JSON.stringify(data),
        })

        let pop = res.json();
        console.log(pop);

        setRedirect(true);
        
        

        
        // await axios.post(url + 'Auth/login', data).then(res =>{
           
        
        //     console.log(res.status);
        //     if(res.status=== '200'){
                
        //          localStorage.setItem('auth_token', res.data)
        //         //  localStorage.setItem('auth_name',res.data)
        //          swal('Success', res.message, 'success')
        //         return <Redirect to='/category' />;
                 
        //     }
        //     // setLogin({...loginInput, error_list: res.validation_errors})

            
            
        //     // if(res.status === '200'){
        //     //     console.log(res.status)
        //     //     localStorage.setItem('auth_token', res.data.token)
        //     //     localStorage.setItem('auth_name', res.data.name)
        //     //     swal("Success", res.data.message, "success")
        //     //     if(res.data.role === 'admin'){

        //     //         history.push('/');
        //     //     }
        //     //     else{   
        //     //         history.push('/404');   
        //     //     }
        //     // }
        //     // else if(res.status === 401){
        //     //     swal("Warning", res.data.message, "warning")
        //     // }   
        //     // else{
        //     //     setLogin({...loginInput, error_list: res.data.validation_errors})
        //     // }
        
        //  })
    }

    if(redirect){
        return <Redirect to="/" />
    }
    // const handleInput = (event) => {
    //     setUserData({...userData, [event.target.id]: event.target.value});
    //   }

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
                                        <span className=" alert-danger d-inline-block my-1 w-100 text-danger">{loginInput.error_list
                                        .email}</span>
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