import { Link } from "react-router";

const Blog=()=>{
    let oneBlog=JSON.parse(localStorage.getItem("oneBlog"));

    return <div>
       <div className="home ">
        {oneBlog.title}
    <h2>{oneBlog.author}</h2> 
   <p className="fs-6 ">{oneBlog.title}</p>
 </div> 
    <div className="container"> 
        <div className="bHead">
            <img src={oneBlog.urlToImage} alt="" />
        <h4>{oneBlog.description}</h4>
        </div>
        <br />
        <p>{oneBlog.content}</p>
        <div className="d-flex justify-content-between">
        <p>published : {oneBlog.publishedAt}</p>
        <a href={oneBlog.url}>Open Documentation</a>
        </div>
        <Link to={"/blogs"}>Go back</Link>

    </div>
    </div>

    }
    
    export default Blog;