import Parking from "../src/Parking";
import { Route,Routes } from "react-router-dom";
import RegisterPage from "./Auth/RegisterPage";
import LoginPage from "./Auth/LoginPage";
import Home from "./Home";
import { Logout } from "./Auths";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate= useNavigate()

  function LogoutFunc(){
    Logout();
    navigate('/login')
  }

  return (
    <>
    <Routes>
    <Route path="/" element={<RegisterPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/parking" element={<Parking/>} />
    <Route path="/home" element={<Home LogoutFunc={LogoutFunc} />} />
    </Routes>
    </>
  );
}

export default App;
