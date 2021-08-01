import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Redirect , useHistory} from "react-router-dom";
import swal from "sweetalert";
import Register from "../auth/Register";

axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });
function AdminPrivateRoute(...rest) {

    const [Authenticated, setAuthenticated] = useState(false);
    const [Loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/checkingAuthenticated').then(res => {
            if(res.status === 200){
                setAuthenticated(true);
            }
            setLoading(false); //to prevent it moving to nxt line while the above is not fetched
        });
        return () => {
            setAuthenticated(false);
        }
    }, [])

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
        if(err.response.status === 401){
            swal('Unauthorized', err.response.data.message, "warning");
            history.push('/')
        }
        return Promise.reject(err);
    });

    axios.interceptors.response.use(
      function(response){
        return response;
      },
      function(err){
        if(err.response.status === 403){ //Access Denied
          swal('Forbedden', err.response.data.message, 'warning')
          history.push('/403') 
        }
        else if(err.response.status === 404){ //Page Not Found
          swal('Forbedden', err.response.data.message, 'warning')
          history.push('/404')
          
        }
        //else if somethings else happens(everything goes wrong after above check)
        return Promise.reject(err);
      }
    );

    if(Loading){
        return (
            // <div class="spinner-grow text-primary" role="status">
            //     <span class="sr-only">...</span>
            // </div>
        //     <div>

        //     <div className="spinner-border text-primary" role="status">
        //     <span className="sr-only">Loading...</span>
        //   </div>
        //     </div>
            <h1 className="spinner-border text-primary">Loading</h1>
        );
    }

  return (
    //include path nd others when function is caled
    <Route
      {...rest}
      render={({ props, location }) =>
        Authenticated ? (
          <Register {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default AdminPrivateRoute;
