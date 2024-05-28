
export const storeUserDetails=(data)=>{
    localStorage.setItem("idToken",data);
}

export const getUserDetails=()=>{
   return localStorage.getItem("idToken");
}
  
export const removeUser=()=>{
    localStorage.removeItem('idToken');
}