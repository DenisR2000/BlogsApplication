import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../syles/Login.css'
import Navbar from './Navbar'
function Login (){

    const [userName, SetuserName] = useState("")
    const [password, SetPassword] = useState("")
    const [rememberMe, SetRememberMe] = useState(false)
    const [itemUserName,  SetitemUserName] = useState("")


    async function onSubmitLogin(e){
        e.preventDefault()
        console.log(userName)
        console.log(password)
        console.log(rememberMe)
        var item = localStorage.getItem('userName')
        if(item == null){
            try
            {
                const request = await fetch('https://localhost:44338/api/accountactions/login', {
                    method: 'post', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userName, 
                        password, 
                        rememberMe
                    })
                })
                if(request.ok === true){
                    localStorage.setItem('userName', userName);
                    localStorage.setItem('password', password);
                    alert("Successfully")
                    e.target[0].value = ''
                    e.target[1].value = ''
                    window.location = '/blogs'
                }
                else{
                 
                    let popup = document.getElementById('popup_400')
                    let popup_content = document.getElementById('popup__content_400')
                    popup_content.classList.add('animate')
                    popup.style.visibility = 'visible'
                    popup.style.opacity = 1
                    setTimeout(() => {
                        let popup = document.getElementById('popup_400')
                        let popup_content = document.getElementById('popup__content_400')
                        popup_content.classList.remove('animate')
                        popup.style.visibility = "hidden"
                        popup.style.opacity = 0
                        popup.style.transition = "all 2s";
                    }, 2500)
                }
            }catch(e){}
        }
        else{
            SetitemUserName(item)
            let popup = document.getElementById('popup')
            let popup_content = document.getElementById('popup__content')
            popup.style.visibility = 'visible'
            popup.style.opacity = 1
            popup_content.classList.add('animate')
        }
    }

    function popupLoginCliseClick(){
        let popup = document.getElementById('popup')
        let popup_content = document.getElementById('popup__content')
        popup_content.classList.remove('animate')        
        popup.style.transition = "all 2s";
        popup.style.visibility = 'hidden'
        popup.style.opacity = 0
    }
   

    return(
        <>
          <Navbar/>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', backgroundColor: 'white', paddingTop: '132px' }}>
                <h2 className="text__fonts_title">Login component</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', padding: '10px', width: '69%', flex: '1 1 auto'  }} >
                    <form onSubmit={onSubmitLogin}>
                        <div className="mb-3">
                            <label style={{ color: 'white' }} className="form-label">User name</label>
                            <input type="text" value={userName} onChange={e => SetuserName(e.target.value)} className="form-control" id="exampleInputEmail1" name="userName" aria-describedby="emailHelp" />
                            <div className="form-text text__fonts">Enter your user name.</div>
                        </div>
                        <div className="mb-3">
                            <label style={{ color: 'white' }} className="form-label">Password</label>
                            <input type="password" value={password} onChange={e => SetPassword(e.target.value)} className="form-control" id="exampleUserName"  aria-describedby="userNameHelp" />
                            <div className="form-text text__fonts">Enter your password.</div>
                        </div>
                        <div className="mb-3">
                            <label style={{ color: 'black', fontSize: '15px', marginRight: '9px' }} className="form-label text__fonts">Remember me</label>
                            <input placeholder="Remember me" type="checkbox" checked={rememberMe} onChange={e => SetRememberMe(e.target.checked)}/>
                        </div>
                        <button type="submit" className="btn btn-primary text__fonts">Login</button>
                    </form>
                    <span style={{ margin: '20px', fontSize: '20px', paddingRight: '6px', position: 'relative' }}>I don't have an account<a style={{ fontSize: '20px', cursor: 'pointer', color: 'rgb(20, 220, 99)', position: 'absolute', right: '-130px' }} className="text__fonts" onClick={() => { window.location = '/register' }}>Create account</a></span>
                </div>
            </div> 

            <div className="popup_400" id="popup_400">
                <div className="popup__body_400">
                    <div id="popup__content_400" class="popup__content_400">
                        <div className="popup__text_400 text__fonts">Notification</div>
                        <div style style={{ width: '250px', height: '120px', padding: '20px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                           <h2 className="text__fonts">Login error</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popup" id="popup">
                <div className="popup__body">
                    <div style={{position: 'relative'}} id="popup__content" class="popup__content">
                        <a style={{ textDecorationLine: 'none', position: 'absolute', top: '10px', right: '1px' }} className="ref" onClick={popupLoginCliseClick} >X</a>
                        <div style={{ marginTop: '20px' }} className=" text__fonts">Notification</div>
                        <div style style={{ width: '200px', height: '150px', padding: '20px' }}>
                            <span className="text__fonts">{itemUserName}, you are authenticated</span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login