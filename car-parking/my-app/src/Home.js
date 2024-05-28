import { Link } from "react-router-dom";
import { isAuthenticated } from "./Auths";

function Home(props){

    
return(
    <>
    <main className="home-page">
    <section className="content-edu ">
                <h2></h2>
            </section>
            <section className="nav-edu">
            <ul className="nav-links">
            {isAuthenticated() ? <li><Link to='/home' className="admin">Home </Link></li> : null}
            {isAuthenticated() ? <li><Link to='/parking' className="admin">Parking </Link></li> : null}
            {!isAuthenticated() ? <li><Link to='/' className="admin">Register</Link></li> :null}
            {!isAuthenticated() ? <li><Link to='/login' className="admin">Login</Link></li>:null}
            {isAuthenticated() ? <li><a href="" onClick={props.LogoutFunc} className="admin">Logout</a></li>:null}
            </ul>
            </section>
            <br/>
            <div className="welcome-note">
            <h2>Car Parking Demo website</h2>
            <h2>Welcome to home Page</h2>
            </div>
    </main>
    </>
)
}

export default Home;