import { Router, Routes, Route, NavLink } from 'react-router-dom'
import  '../syles/User.css'
import CardBlog from './CardBlog'
import { useState } from 'react'

function User(props){
    const onUserName = props.infoUsers.userName
    const userSubscriber = localStorage.getItem('userName')

    async function onClickSubscribe(){
        if(userSubscriber != null){
            const request = await fetch('https://localhost:44338/api/accountactions/subscribe', {
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userSubscriber,
                    onUserName
                })
            })
        }
        else{
            window.location = '/login'
        }
    }

    return(
        <>
            <div style={{display: 'flex', padding: '7px', marginLeft: '130px', flexDirection: 'column', paddingTop: '132px' }}>
                    <div className="cart__user" style={{backgroundColor: 'rgb(222, 227, 252)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', width: 'auto', maxWidth: 'auto', padding: '20px', borderRadius: '10px', border: 'solid 1px rgb(102, 113, 173)',  position: 'relative' }}>
                        {props.infoUsers.base64URL ? <img 
                            style={{ width: '68px', borderRadius: '50%' }}
                            src={props.infoUsers.base64URL} /> : <img 
                            style={{ width: '68px', borderRadius: '50%' }}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png" />}
                        
                            <span className="text__fonts" style={{ position: 'absolute', left: '106px' }}>{props.infoUsers.userName}</span>
                        <button onClick={onClickSubscribe} className="btn btn-primary text__fonts" style={{ color: 'white' }}>Subscribe</button>
                    </div>
                    {/* <div class="accordion-item">
                        <h2 class="accordion-header" id={`heading${props.countClass}`}>
                        <button class="accordion-button text__fonts" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.countClass}`} aria-expanded="true" aria-controls={`collapse${props.countClass}`}>
                            User posts
                        </button>
                        </h2>
                        <div id={`collapse${props.countClass}`} class="accordion-collapse collapse" aria-labelledby={`heading${props.countClass}`} data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            {props.dstaBlogs.map((blog, i) => {
                                if(blog.userId == props.infoUsers.id){
                                    return(
                                        <>
                                            <CardBlog key={Date.now()} info={blog} user={props.infoUsers}/>
                                        </>
                                    )
                                }
                            })}
                        </div>
                        </div>
                    </div> */}
            </div>
        </>
    )
}
export default User



