import { useState } from "react";
import { isAuthenticated } from "./Auths";
import { Link } from "react-router-dom";

function Parking(){


    const  [slot1,setSlot1]=useState("booking open")
    const  [slot2,setSlot2]=useState("booking open")
   const  [slot3,setSlot3]=useState("booking open")

   const  [disable1,setDisable1]=useState(false)
   const  [disable2,setDisable2]=useState(false)
  const  [disable3,setDisable3]=useState(false)

  const [carmove1,setCarmove1]=useState(false)
  const [carmove2,setCarmove2]=useState(false)
  const [carmove3,setCarmove3]=useState(false)

    function handleClick1(slot1){
        setSlot1(`${slot1} Was Booked`)
        setDisable1(true)
        setCarmove1(true)
    }

    function handleClick2(slot2){
        setSlot2(`${slot2} Was Booked`)
        setDisable2(true)
        setCarmove2(true)
    }
    
    function handleClick3(slot3){
        setSlot3(`${slot3} Was Booked`)
        setDisable3(true)
        setCarmove3(true)
    }
    
    


    return(
        <>
        {/* <img src="car-img.jpg" width={100} height={100} style={{backgroundColor:"none"}}/> */}
        <div className="blog-page">
            <div className="blog-dash">
                <h1 className="car-h1">Car Parking</h1>
            <div>
            <ul className="nav-links ">
        {isAuthenticated() ? <li><Link to='/home' className="admin">Home </Link></li> : null}
        {isAuthenticated() ? <li><Link to='/parking' className="admin">Parking </Link></li> : null}
        {!isAuthenticated() ? <li><Link to='/' className="admin">Register</Link></li> :null}
        {!isAuthenticated() ? <li><Link to='/login' className="admin">Login</Link></li>:null}
        </ul>
            </div>
            </div>
        </div>
        <main className="main">
           <section className="car1">
           <div className="car-running">
                {carmove1 ? <div className="car-run1">
                   <img src="download1.jpg" width={40}  height={40} className="img-car" />
                </div> :null}
            </div>
                <div className="inside-car1">
                <h3>Slot-1</h3>
                <button className="btn1" disabled={disable1} onClick={()=>handleClick1("slot1")}>{slot1}</button>
                </div>
            </section>

            <section className="car2">
            <div className="car-running">
                {carmove2 ? <div className="car-run2">
                   <img src="download1.jpg" width={40}  height={40} className="img-car" />
                </div> :null}
            </div>
                <div className="inside-car2">
                <h3>Slot-2</h3>
                <button className="btn2" disabled={disable2} onClick={()=>handleClick2("slot2")}>{slot2}</button>
                </div>

            </section>

            <section className="car3">
            <div className="car-running">
                {carmove3 ? <div className="car-run3">
                   <img src="download1.jpg" width={40}  height={40} className="img-car" />
                </div> :null}
            </div>
                <div className="inside-car3">
                <h3>Slot-3</h3>
                <button className="btn3" disabled={disable3} onClick={()=>handleClick3("slot3")}>{slot3}</button>
                </div>

            </section>
            
        </main>
        </>
    )

}

export default Parking;