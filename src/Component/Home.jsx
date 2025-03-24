import { Link } from "react-router";

const Home =()=>{
   
    
return <div  className="h" >
    <div className="home">Welcome to our WebSite</div>
    <Link to={'/blogs'}>Go To Blogs</Link>
</div>
}

export default Home;