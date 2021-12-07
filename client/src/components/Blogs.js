import React, {useEffect, useState} from 'react'
import CardBlog from './CardBlog'
import Navbar from './Navbar'
import axios from 'axios'
function Blogs(props){

    const [dataBlogs, setDataBlogs] = useState([])
    const [dataUsers, setDataUsers] = useState([])
    const [postsSkip, setPostsSkip] = useState(0)
    const [loading, setLoading] = useState(true)
   

    
    useEffect(() => {
        if(loading){
            axios.get(`https://localhost:44338/api/blogs/getrangposts/${postsSkip}`)
                .then(response => {
                    setDataBlogs([...dataBlogs, ...response.data])
                    setPostsSkip(prevCourBlogs => prevCourBlogs +3)
                }).finally(() => setLoading(false))
        }
       
    }, [loading])

    useEffect(() => {
       
       document.addEventListener('scroll', scrollHendler)
       return function(){
           document.removeEventListener('scroll', scrollHendler)
       }
    }, [])
     
    function scrollHendler(e){
        if(e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100){
            setLoading(true)
        }
    }
    // const [curentPage, setCurentPage] = useState(1)
    // const [countItemOnPage, setCountItemOnPage] = useState(5)
    // function onClickPage(e){
    //     setCurentPage(Number(e.target.id))
    // }
    // const pages = []
    // for(let i = 1; i < Math.ceil(dateVal.length/countItemOnPage); i++){
    //     pages.push(i)
    // }
    // const IndexOfLastItem = curentPage * countItemOnPage
    // const indexOfFirstItem = IndexOfLastItem - countItemOnPage
    // const curentItems = date.slice(indexOfFirstItem, IndexOfLastItem)
    // const RenderPageNumber = pages.map((number, i) => {
    //     return(
    //         <div key={i} id={number} onClick={onClickPage} className="page__item" style={{margin: 0, paddingTop: '132px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontSize: '26px', padding: '30px', }}>
    //             {number}        
    //         </div>
    //     )
    // })

    return(
        <>
            <Navbar />
            {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '132px'  }}>
                {RenderPageNumber}
            </div> */}
            
            <div style={{ paddingTop: '132px' }}>
                { dataBlogs.map((blog, i) => {
                    return(
                        <>
                            <div className="text-center">
                                <CardBlog key={i} info={blog} users={props.dateUsers}/>
                            </div>
                        </>
                    )
                }) }
            </div>
        </>
    )
}

export default Blogs