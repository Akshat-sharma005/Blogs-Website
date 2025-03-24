import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loader from "./Loader";
import { use } from "react";

const Blogs=({setNewBlog})=>{
const[load,setLoad]=useState(false);
const [blog,setBlog]=useState([]);
const [currPage,setCurrPage]=useState(1)
const [ActivePage,setActivePage]=useState([]);
const [search,setSearch]=useState("keyword");
const [perPage,setPerPage]=useState(15);
const [searchField,setSearchField]=useState("title");
let navigate=useNavigate();
let id=null;
const param=useParams();
// console.log(blog);
const fetchData=()=>{
    fetch(` https://newsapi.org/v2/everything?q=${search}&searchIn=${searchField}&pageSize=${perPage}&page=${currPage}&apiKey=967cca04b1824e928b9350abbb9d2fb6`)
    .then(res => res.json())
    .then((res)=>{
       setLoad(false);
        setBlog(res.articles)
        setPage(res)
});

}
useEffect(()=>{
    setLoad(true);
    fetchData();

},[currPage,perPage,search])

   
const onBlogClick=(v)=>{
    localStorage.setItem("oneBlog", JSON.stringify(v));
    navigate(`/blogs/blog`)
    // setNewBlog(v);
}
const setPage=(v)=>{    
    let total=100
    let totalPages=Math.ceil(total/perPage);
    let pages=Array.from(Array(totalPages+1).keys()).slice(1);
    let selectedPage=currPage;
    
   if (selectedPage>2 && selectedPage<(totalPages-2)) {
        selectedPage=selectedPage-3;
    }else if(selectedPage<3){
        selectedPage=0;
    } else if(selectedPage==totalPages){
        selectedPage=selectedPage-5;
} else if (selectedPage=totalPages-1) {
  selectedPage=selectedPage-4
}
    let activePages=pages.slice(0,-1).slice(selectedPage,selectedPage+5);
    setActivePage(activePages);
       
}
const onSearch=(e)=>{
    let str=e.target.value
    id && clearTimeout(id)
    id=setTimeout(()=>{
        console.log(str);
        setSearch(str? str:"keyword")},1000
    )
}

const changePerPage=(e)=>{
    setPerPage(e.target.value);
    
}



return <div >
    <div className="home">
        
    <p>Insight and Inspiration </p>
   <p>Discovering the World through our Blog's </p>
   <div className="inputs">
   <div>
    {/* <select className="sel"  onChange={setContent} >
        <option value="title">Title</option>
        <option value="deescription">Description</option>
        <option value="content">Content</option>
    </select> */}
    <select  className="select "  onChange={(e)=> setSearchField(e.target.value)}>
    <option value="" selected disabled>Search By</option>
    <option value="title">Title</option>
    <option value="description">Description</option>
    <option value="content">Content</option>
   </select>
    </div>
   <input type="text" placeholder="search here" onChange={onSearch}/>
   </div>
</div>
    <div className="blogs">
    <select  className="select " onChange={changePerPage}>
    <option value="" selected disabled>per page blogs</option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
    <option value="25">25</option>
   </select>
        {blog?.map((v,i)=>{
            return <div className="blog" onClick={()=>onBlogClick(v)}>
                <div className="blogHead">
                    Article <i className="fa-regular fa-circle-dot"></i>  <span>{v.publishedAt.substr(0,10)}</span>
                </div>
                <div className="blogBody">
                    <h4>{v.author}</h4>
                    <p>{v.title}</p>
                </div>
                <div className="blogFoot">
                    <div><i className="fa-regular fa-thumbs-up"></i> 0 &ensp; <a href={v.url}>Source</a></div>
                    <div><i className="fa-regular fa-bookmark" ></i></div>
                </div>
            </div>
            
        })}
    </div>
    <div className="page">
        {ActivePage.map((v)=>{
            return <span className={`dot ${v==currPage && "bg-dark"}`} onClick={()=>{setCurrPage(v)}}>{v}</span>
        })}
    </div>
    {load  && <Loader/>}
        
</div>
}

export default Blogs;