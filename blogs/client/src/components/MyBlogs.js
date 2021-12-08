import { NavLink } from "react-router-dom"
import CardBlog from "./CardBlog"
import '../syles/Login.css'
import Navbar from "./Navbar"
import CartMyBlogs from "./CartMyBlogs"
function MyBlogs(props){
    const userId = localStorage.getItem("userId")

    return(
        <>
            <Navbar />
            <div style={{ paddingTop: '132px' }}> 
            <NavLink to="/newblog" className="btn btn-primary text__fonts">Add new</NavLink>
                <h2 className="text__fonts">My blogs</h2>
                 {props.dateBlogs.map((blog, i) => {
                     console.log("MyBlogs!!!: "+ blog)
                     if(blog.userId === userId){
                         return(
                             <>
                                
                                <CartMyBlogs key={i} info={blog}/>
                             </>
                         )
                     }
                 })}
            </div>
        </>
    )
}

export default MyBlogs