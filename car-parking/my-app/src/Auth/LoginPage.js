import { useState } from "react";
import {LoginApi} from "../Api"
import { storeUserDetails } from "../Storage";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated } from "../Auths";


function LoginPage(){


   const initialInputsValues = {email:"", password:""};
   const initialErrorValues={email : {required : false},
   password : {required : false},customError : null}

   const [errors,setErrors] = useState(initialErrorValues);
   const [inputs,setInputs]=useState(initialInputsValues);
   const [hasError,setHaserror]=useState(true)

   function handleChange(e){
    const {name,value} = e.target;
    setInputs({...inputs,[name]:value})
   }

   function handleSubmit(e){
    let hasErr =false;
    e.preventDefault();
   let errors = initialErrorValues;

   if(inputs.email === ""){
    errors.email.required = true;
    hasErr=true
   }
   if(inputs.password === ""){
    errors.password.required = true;
    hasErr=true
   }

   if(!hasErr){
    LoginApi(inputs)
    .then((res)=>storeUserDetails(res.data.idToken))
    .catch((err)=>{
       if(err.code === "ERR_BAD_REQUEST"){
        setErrors({...errors,customError : "Invalid Credentials"})
       }
    }).finally(()=>{
        setHaserror(true)
    })
   }

   setErrors({...errors})
   setHaserror(hasError)
   }

   if(isAuthenticated()){
    return <Navigate to='/parking' />
   }

    return(
        <>
       <div className="login-page">
        <form onSubmit={handleSubmit} className="form">
       <div className="form-inputs">
        <h3 className="login-text">Login Form</h3>
        &nbsp;
       <label htmlFor="email" className=""></label>
        <input type="email" name="email" className="email" id="email" onChange={handleChange} placeholder="Email" />
        {errors.email.required ? <div>Enter Your Email</div> : null}
        <br/>
        <br/>
        <label htmlFor="password"></label>
        <input type="password" name="password" className="password" id="password" onChange={handleChange} placeholder="Password" />
        {errors.password.required ? <div>Enter Your Password</div> : null}
        <br/>
        <br/>

        {errors.customError ? <div>{errors.customError}</div> : null}
        <br/>
        <br/>

        <button disabled={!hasError} className="btn-submit">Submit</button>
        <br/>
        <br/>
        <div>Create an Account ? <Link to="/">Register</Link></div>
       </div>
        </form>
       </div>
        </>
    )
}


export default LoginPage;