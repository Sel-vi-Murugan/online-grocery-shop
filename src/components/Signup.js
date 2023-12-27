import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
function signup()
{
    return(

<div class="container">
            <h2>Sign Up</h2>
            <form>
                <input type="text"placeholder="username"required/>
                <input type="email"placeholder="email"required/>
                <input type="text"placeholder="password"required/>
                <input type="password"placeholder="confirm password"required/>
            <div class="terms">
                    <input type="checkbox" id="checkbox"required/>
                    <lable for="checkbox">I Agree to these
                        <a href="#"> terms and conditions</a></lable>
            </div>
            <Link to="/"><button type ="submit">Signup</button></Link> 
            </form>
            <p>
        <h3>Already have an account?{' '}
        <Link to="/Login">Login</Link></h3>
      </p>
       
</div>

    )
    }
export default signup;