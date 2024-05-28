import axios from "axios";
import { getUserDetails } from "./Storage";


axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1"
const API_KEY = "AIzaSyBcaRbLsT_EIXC5cVZU4rzhro6L8GZrmcY";
const REGISTER_URL = `/accounts:signUp?key=${API_KEY }`;
const LOGIN_URL =`/accounts:signInWithPassword?key=${API_KEY}`;
const USER_DETAILS_URL=`/accounts:lookup?key=${API_KEY}`

export const RegisterApi = (inputs)=>{
     const data = {displayName : inputs.name, email : inputs.email , password: inputs.password};
  return  axios.post(REGISTER_URL,data)
}

export const LoginApi = (inputs)=>{
    const data = {email : inputs.email , password: inputs.password};
  return  axios.post(LOGIN_URL,data)
}

export const UserDetailsApi = ()=>{
  const data ={idToken : getUserDetails()};
  return  axios.post(USER_DETAILS_URL,data);
}