import Layout from './Component/Layout'
import { BrowserRouter, Route, Routes } from 'react-router'
import Blogs from './Component/Blogs'
import Blog from './Component/Blog'
import Home from './Component/Home'
import Event from './Component/Event'


function App() {
 

 return <BrowserRouter>
 <Layout>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/blogs' element={<Blogs />}/>
    <Route path='/blogs/blog' element={<Blog />}/>
    <Route path='/events' element={<Event/>}/>
    <Route path='/about' element={<Blog/>}/>
    <Route path='/more' element={<Blog/>}/>

  </Routes>
  </Layout>
  </BrowserRouter>
 
}

export default App
