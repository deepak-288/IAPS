import { useState } from "react";
import { RegisterApi } from "../Api";
import { isAuthenticated } from "../Auths";
import { Link, Navigate } from "react-router-dom";
import { storeUserDetails } from "../Storage";

function RegisterPage(){


   const initialInputsValues = {name :"", email:"", password:""};
   const initialErrorValues={name : {required : false}, email : {required : false},
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

   if(inputs.name === ""){
    errors.name.required = true;
    hasErr=true
   }
   if(inputs.email === ""){
    errors.email.required = true;
    hasErr=true
   }
   if(inputs.password === ""){
    errors.password.required = true;
    hasErr=true
   }

   if(!hasErr){
    RegisterApi(inputs)
    .then((res)=>storeUserDetails(res.data.idToken))
    .catch((err)=>{
        if(err.response.data.error.message === "EMAIL_EXISTS"){
            setErrors({...errors,customError: "Already This Email Has Been Register"})
        }
        else if(String(err.response.data.error.message).includes('WEAK_PASSWORD')){
            setErrors({...errors,customError: "Password Must Be 6 Characters"})
        }
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
        <div className="register-page">
        <form onSubmit={handleSubmit} className="form">
        <div className="form-inputs">
        <h3 className="login-text">Register Form</h3>
        &nbsp;
        <label htmlFor="name"></label>
        <input type="text" name="name" className="name" id="name" onChange={handleChange} placeholder="Name" />
        {errors.name.required ? <div>Enter Your Name</div> : null}
        <br/>
        <br/>
        <label htmlFor="email"></label>
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

        <div>Alreadt have an Account ? <Link to="/login">Login</Link></div>
        </div>
        </form>
        </div>
        </>
    )
}

export default RegisterPage;