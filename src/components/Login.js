import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
function Login(){
 return(
  <div class="container">
            <form>
            <h2>Login</h2>
            <div class="input">
                <input type="text"name="uname"placeholder="username" required/>
            </div>
            <div class="input">
                <input type="password"name="pass"placeholder="password" required/>
            </div>
            <Link to="/"><button type ="submit">login</button></Link>
            <div>
            </div>

            </form>
            <p>
        <h3>Don't have an account?{' '}
        <Link to="/signup">SignUp</Link></h3>
      </p>
  </div>  
 )

}
export default Login;