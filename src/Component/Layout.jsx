import { useNavigate } from "react-router";
import Header from "./Header";
import Home from "./Home";
import { useState } from "react";

const Layout=({children})=>{
   
return ( <div className="layout">
<Header/>
<div className="body">
{children}
</div>

<footer className="footer d-flex justify-content-between">
    <div>
        <h3>Contact</h3>
        <div>
        <p>Address: Bhopal 462003</p>
        </div>
    </div>
    <div> 
        <h3>About us</h3>
        <div>
            
        </div>
    </div>
</footer>

</div>) 
}

export default Layout;