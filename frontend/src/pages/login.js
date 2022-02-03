import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav';


export default function login() {
    function myFunction() {
        alert("You're Logged in!");
      }
    return (
        
     <React.Fragment>
         <Nav/>
        <div className="login">
            <div className="form-box">
                {/* <div className="button-box">
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn" id="login">Log In</button>
                    <button type="button" className="toggle-btn" id="register" >Sign Up</button>
                </div> */}
                <p style={{color:"black",marginTop:"20px",fontSize:"30px"}}>Log In</p>
                <div className="social-icons">
                     <a href ="https:www.facebook.com"><img src="./../assets/images/facebook.png"/></a>
                    <i className= "fab fa-faceSbook"></i>
                     
                     
                     <a href="https://www.instagram.com"><img src="./../assets/images/instagram.png"/>
                        <i className= "fab fa-instagram"></i>
                         </a>
                         <a href="https://www.twitter.com"><img src="./../assets/images/twitter.png"/>
                            <i className= "fab fa-twitter"></i>
                             </a>   
                </div>
                <form id="login" className="input-group" action="/home" >
                    <input type="text" className="input-field" placeholder="User Id" required/>
                    <input type="password" className="input-field" placeholder="Enter Password" required/>
                    {/* <input type="checkbox" className="chech-box"/><span>Remember Password</span> */}
                    <button type='submit' className='submit-btn' style={{marginLeft:"80px"}} onClick={(e)=>myFunction(e)}>submit</button>
                    {/* <input type="submit" className="submit-btn" value="Log in"/> */}
                   
                 </form>
                {/* <form id="register" className="input-group">
                    <input type="text" className="input-field" placeholder="User Id" required/>
                    <input type="email" className="input-field" placeholder="Email Id" required/>
                    <input type="text" className="input-field" placeholder="Enter Password" required/>
                    <input type="checkbox" className="chech-box"/><span>I agree to the terms & conditions.</span>
                    <button type="submit" className="submit-btn">Register</button>
                </form> */}
            </div>
        </div>
     </React.Fragment>
     );
     }