import { useState, useEffect, useContext} from 'react'
import Blogs from './Blogs'
import Home from './Home'
import Users from './Users'
import '../syles/App.css'
import NotFound from './NotFound'
import { Route, BrowserRouter, Routes, NavLink, Link } from 'react-router-dom'
import Navbar from './Navbar'
import {BlackMiror} from './BlackMiror'
import CardBlog  from './CardBlog'
import Register from './Register'
import Login from './Login'
import Profil from './Profil'
import MyBlogs from './MyBlogs'
import AddNewBlog from './AddNewBlog'
import ChangePassword from './ChangePassword'
import BlogInformation from './BlogInformation'
import EditProfil from './EditProfil'

function App() {
  const [valueBlogs, setBlogs] = useState([])
  const [valueUsers, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [blogCoder, SetBlogCoder] = useState("")
  const [addbNewBlog, setaddbNewBlog] = useState("")
  const [myblogsCoder, setMyblogsCoder] = useState("")
  const userName = localStorage.getItem("userName")
  
  useEffect(() => {
    if(localStorage.getItem("userName") != null){
      SetBlogCoder('/blogs')
      setaddbNewBlog('/newblog')
      setMyblogsCoder('/myblogs')
      RequestToGEtId()
    }
    else{
      setMyblogsCoder('/myblogskvlsdfv76')
      setaddbNewBlog('/newbvmldsfmkv098log')
      SetBlogCoder('/blogsalas&lkf*sadl')
    }

    async function RequestToGEtId(){
      console.log("Rewuest to get id started")
      const request = await fetch(`https://localhost:44338/api/accountactions/getuserid/${userName}`, {
        method: 'get'
      })
      const data = await request.json()
      if(request.ok === true){
        localStorage.setItem('userId', data)
      }
    }

    async function fetchBlogs(){
      const startPos = 6
      const finPos = 11
      const URL = 'https://localhost:44338/api/blogs/get'
      const URL_2 = `https://localhost:44338/api/blogs/get/${startPos}/${finPos}`
      let result = await fetch(URL)
      let data = await result.json()
      setBlogs(data)
      setLoading(false)
    }

    async function fetchUsers(){
      let result = await fetch('https://localhost:44338/api/users/getusers')
      let data = await result.json()
      setUsers(data)
      setLoading(false)
    }
   
    fetchUsers()
    fetchBlogs()
    console.log(valueUsers)
    
  }, [])

  return (
   <>
  
    <div className="text-center">
        <div>
            <div className="container-main">
              { loading ? (
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>
              ) : (
              <div>
                {/* <BlackMiror/> */}
                <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/users" element={<Users dateUsers={ valueUsers } dateBlogs={valueBlogs}/>}></Route>
                    <Route path='/blogs' element={<Blogs dateUsers={ valueUsers }/>}></Route>  {/* date={valueBlogs} */} 
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/profil" element={<Profil />}></Route>
                    <Route path={addbNewBlog} element={<AddNewBlog />}></Route>
                    <Route path="/changepassword" element={<ChangePassword />}></Route>
                    <Route path={myblogsCoder} element={<MyBlogs dateBlogs={valueBlogs}/>}></Route>
                    <Route path="/bloginfo" element={<BlogInformation />}></Route>
                    <Route path="/editprofil" element={<EditProfil />}></Route>
                    <Route path='*' exact={true} element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </div>
              )}
            </div>
        
        </div>
      </div>
   </>
  );
}

export default App;
