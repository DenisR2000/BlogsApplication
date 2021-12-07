import { useEffect, useState } from 'react'
import acsios from 'axios'
import axios from 'axios'
import Navbar from './Navbar'
function BlogInformation(props){
    const id = localStorage.getItem('infoblogId')
    const [blogInfo, setBlog] = useState({})
    const [users, setUsers] = useState([])
    const [user_, setUser] = useState("")

    useEffect(() => {
        async function getBlog(){
            const response = await fetch(`https://localhost:44338/api/blogs/getblog/${id}`, {
                method: 'get'
            })
            const blog_ = await response.json()
            setBlog(blog_)
        }

        getBlog()
        
    }, [id])
   
    return(
        <>
            <Navbar />
            <div  style={{ width: '100%', paddingTop: '132px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center'  }}>
                <h2 style={{ width: '68%' }}>{blogInfo.title} </h2>
                <img style={{width: '68%'}} src={blogInfo.base64URL} />
                <span>
                        <p className="text__fonts" style={{ color: '#000', marginLeft: '40px', marginRight: '40px', marginTop: '10px',fontFamily: "charter, Georgia, Cambria, Times New Roman Times, serif", marginBottom: '10px', fontSize: '24px'  }}>{ blogInfo.information}</p>
                    </span>
            </div>
            
        </>
    )
}

export default BlogInformation