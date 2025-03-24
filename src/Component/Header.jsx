import { Link, useNavigate } from "react-router";

const Header=()=>{
    const navigate=useNavigate();
    const onNavigate=(path="")=>{
        navigate(`/${path}`);
        
    }
return <div className="header">
    <div className="head">
<div className="head-left">
<i className="fa-brands fa-wordpress"></i>
<div className="nav">
    
<button onClick={()=> onNavigate()}> Home </button>
<button onClick={()=> onNavigate("blogs")} >Blogs</button>
<button onClick={()=> onNavigate("events")}  >Events</button>
<button >About us</button>
<button >More</button>
</div>
</div>
<div className="head-right">
    <p>Login</p>
</div>
</div>
</div>
}

export default Header;