import { getUserDetails, removeUser } from "./Storage"

export const isAuthenticated =()=>{
   return getUserDetails()!== null?true:false;
}

export const Logout=()=>{
    removeUser();
 }