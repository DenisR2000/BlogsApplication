import User from "./User"
import { useState } from 'react'
import Navbar from "./Navbar"
import Navbar2 from "./Navbar2"

function Users(props){
    var userName = localStorage.getItem("userName")

    return(
        <>
            <Navbar />
            {props.dateUsers.map((user, i) => {
                if(user.userName != userName){
                  
                    return(
                        <>
                            <div className="text-center">
                                <User countClass={i} key={i} infoUsers={user} dstaBlogs={props.dateBlogs}/>
                            </div> 
                        </>
                    )
                }
            })}
        </>
    )
}
export default Users