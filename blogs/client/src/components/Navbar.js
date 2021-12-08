import {NavLink} from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import '../syles/Navbar.css'

function Navbar(){
    const [user, setUser] = useState({})
    const  userName = localStorage.getItem("userName")
    const  id = localStorage.getItem("userId")
    const  email = localStorage.getItem("email")
    const  phoneNumber = localStorage.getItem("phoneNumber")
    const  password = localStorage.getItem("password")
    const  confirmPassword = localStorage.getItem("confirmPassword")
    useEffect(() => {
       
        if(localStorage.getItem("userName") != null){
            document.getElementById('registerBlock').style.display = 'block'
        }
        async function getUSer(){
            const response = await fetch(`https://localhost:44338/api/users/getuser/${id}`)
            const date = await response.json()
            setUser(date)
        }
        getUSer()
        
    }, [id])
    useEffect(() => {
        setTimeout(() => { document.getElementById('loading').style.display = 'none'}, 2000)
        if(localStorage.getItem("userName") != null){
            document.getElementById('registerBlock').style.display = 'block'
        }
    }, [])
    

    function clickProfil(){
        let popup = document.getElementById('popup_Reg')
        let popup_content = document.getElementById('popup__content_Reg')
        popup.style.visibility = 'visible'
        popup.style.opacity = 1
        popup_content.classList.add('animate')
    }

    function popLogoutCloseClick(){
        let popup = document.getElementById('popup2_Reg')
        let popup_content = document.getElementById('popup_2__content_Reg')
        popup_content.classList.remove('animate')
        popup.style.visibility = "hidden"
        popup.style.opacity = 0
        popup.style.transition = "all 2s";
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none'
            var buttonConfirm = document.getElementById('buttonConfirm_Reg')
            buttonConfirm.style.visibility = 'visible'
            buttonConfirm.style.opacity = 1
        }, 3000)    
    }

    function popupLoginCliseClick(){
        let popup = document.getElementById('popup_Reg')
        let popup_content = document.getElementById('popup__content_Reg')
        popup_content.classList.remove('animate')        
        popup.style.transition = "all 2s";
        popup.style.visibility = 'hidden'
        popup.style.opacity = 0
    }

    async function LogoutAction(){
        document.getElementById('loader').style.display = 'block'
        var buttonConfirm = document.getElementById('buttonConfirm_Reg')
        buttonConfirm.style.visibility = 'hidden'
        buttonConfirm.style.opacity = 0
        var loader = document.getElementById('loader')
        var text_information = document.getElementById('text_information_Reg')
        text_information.style.transition = "all 2s";
        text_information.innerHTML = ''
        text_information.innerHTML = `Logging out of the account ${userName}`
        try{
            const request = await fetch('https://localhost:44338/api/accountactions/logout', {
                method: 'post'
            })
            if(request.ok === true){
                localStorage.removeItem("userName")
                localStorage.removeItem("password")
                localStorage.removeItem("email")
                localStorage.removeItem("phoneNumber")
                localStorage.removeItem("userId")
            }
            setTimeout( async () => {
                popLogoutCloseClick()
                popupLoginCliseClick()
                window.location = '/blogs'
            }, 3000)
        }
        catch(e){} 
    }

    function onSubmitLogout(e){
        e.preventDefault()
        if(localStorage.getItem('userName') != null){
            var text_information = document.getElementById('text_information_Reg')
            text_information.innerHTML = 'Are you sure you want to log out of your account'
            let popup = document.getElementById('popup2_Reg')
            let popup_content = document.getElementById('popup_2__content_Reg')
            popup_content.classList.add('animate')
            popup.style.visibility = 'visible'
            popup.style.opacity = 1
        }
        else{
            alert('User not found')
        }
    }

    function MyBlogssClick(){
        popupLoginCliseClick()
    }

    return(
        <>
            <div className="w-100 d-flex flex-row-reverse align-content-center; align-items-center justify-content-between" style={{ height: '130px', padding: '20px',  margin: 0, color: '#fff', fontFamily: 'sans-serif', fontSize: '20px', background: 'rgb(124, 159, 230)', position: 'fixed', zIndex: 100}} >
                <div className="d-flex flex-row-reverse align-items-center" style={{ marginLeft: '8px' }}>
                    <div style={{ height: '80px', width: '80px', borderRadius: '50%', backgroundColor: 'none', marginLeft: '9px' }}>
                        {userName 
                            ? 
                                <img style={{ width: '100%', borderRadius: '50%' }} src={user.base64URL} alt="" />
                            :
                                <img style={{ width: '100%', borderRadius: '50%' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png" alt="" />
                        }
                    </div>
                    <div style={{ cursor: 'pointer' }}>
                        <div style={{ display: 'block' }} id="loading">Loading...</div>
                        {userName
                             ? 
                                <span className="text__fonts" style={{ cursor: 'pointer', color: 'black'}} onClick={clickProfil}>
                                    {user.userName}
                                </span> 
                             : 
                                <span className="text__fonts">UserName</span>
                        }
                    </div>
                </div>
                <div className="align-items-start">
                    <div className="d-flex flex-row">
                        <svg style={{ width: '130px', marginLeft: '20px', marginRight: '40px' }} viewBox="0 0 3940 610">
                            <path d="M594.79 308.2c0 163.76-131.85 296.52-294.5 296.52S5.8 472 5.8 308.2 137.65 11.69 300.29 11.69s294.5 132.75 294.5 296.51M917.86 308.2c0 154.16-65.93 279.12-147.25 279.12s-147.25-125-147.25-279.12S689.29 29.08 770.61 29.08s147.25 125 147.25 279.12M1050 308.2c0 138.12-23.19 250.08-51.79 250.08s-51.79-112-51.79-250.08 23.19-250.08 51.8-250.08S1050 170.09 1050 308.2M1862.77 37.4l.82-.18v-6.35h-167.48l-155.51 365.5-155.51-365.5h-180.48v6.35l.81.18c30.57 6.9 46.09 17.19 46.09 54.3v434.45c0 37.11-15.58 47.4-46.15 54.3l-.81.18V587H1327v-6.35l-.81-.18c-30.57-6.9-46.09-17.19-46.09-54.3V116.9L1479.87 587h11.33l205.59-483.21V536.9c-2.62 29.31-18 38.36-45.68 44.61l-.82.19v6.3h213.3v-6.3l-.82-.19c-27.71-6.25-43.46-15.3-46.08-44.61l-.14-445.2h.14c0-37.11 15.52-47.4 46.08-54.3m97.43 287.8c3.49-78.06 31.52-134.4 78.56-135.37 14.51.24 26.68 5 36.14 14.16 20.1 19.51 29.55 60.28 28.09 121.21zm-2.11 22h250v-1.05c-.71-59.69-18-106.12-51.34-138-28.82-27.55-71.49-42.71-116.31-42.71h-1c-23.26 0-51.79 5.64-72.09 15.86-23.11 10.7-43.49 26.7-60.45 47.7-27.3 33.83-43.84 79.55-47.86 130.93-.13 1.54-.24 3.08-.35 4.62s-.18 2.92-.25 4.39a332.64 332.64 0 0 0-.36 21.69C1860.79 507 1923.65 600 2035.3 600c98 0 155.07-71.64 169.3-167.8l-7.19-2.53c-25 51.68-69.9 83-121 79.18-69.76-5.22-123.2-75.95-118.35-161.63m532.69 157.68c-8.2 19.45-25.31 30.15-48.24 30.15s-43.89-15.74-58.78-44.34c-16-30.7-24.42-74.1-24.42-125.51 0-107 33.28-176.21 84.79-176.21 21.57 0 38.55 10.7 46.65 29.37zm165.84 76.28c-30.57-7.23-46.09-18-46.09-57V5.28L2424.77 60v6.7l1.14-.09c25.62-2.07 43 1.47 53.09 10.79 7.9 7.3 11.75 18.5 11.75 34.26v71.14c-18.31-11.69-40.09-17.38-66.52-17.38-53.6 0-102.59 22.57-137.92 63.56-36.83 42.72-56.3 101.1-56.3 168.81C2230 518.72 2289.53 600 2378.13 600c51.83 0 93.53-28.4 112.62-76.3V588h166.65v-6.66zm159.29-505.33c0-37.76-28.47-66.24-66.24-66.24-37.59 0-67 29.1-67 66.24s29.44 66.24 67 66.24c37.77 0 66.24-28.48 66.24-66.24m43.84 505.33c-30.57-7.23-46.09-18-46.09-57h-.13V166.65l-166.66 47.85v6.5l1 .09c36.06 3.21 45.93 15.63 45.93 57.77V588h166.8v-6.66zm427.05 0c-30.57-7.23-46.09-18-46.09-57V166.65L3082 212.92v6.52l.94.1c29.48 3.1 38 16.23 38 58.56v226c-9.83 19.45-28.27 31-50.61 31.78-36.23 0-56.18-24.47-56.18-68.9V166.66l-166.66 47.85V221l1 .09c36.06 3.2 45.94 15.62 45.94 57.77v191.27a214.48 214.48 0 0 0 3.47 39.82l3 13.05c14.11 50.56 51.08 77 109 77 49.06 0 92.06-30.37 111-77.89v66h166.66v-6.66zM3934.2 588v-6.67l-.81-.19c-33.17-7.65-46.09-22.07-46.09-51.43v-243.2c0-75.83-42.59-121.09-113.93-121.09-52 0-95.85 30.05-112.73 76.86-13.41-49.6-52-76.86-109.06-76.86-50.12 0-89.4 26.45-106.25 71.13v-69.87l-166.66 45.89v6.54l1 .09c35.63 3.16 45.93 15.94 45.93 57V588h155.5v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66V255.72c7-16.35 21.11-35.72 49-35.72 34.64 0 52.2 24 52.2 71.28V588h155.54v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66v-248a160.45 160.45 0 0 0-2.2-27.68c7.42-17.77 22.34-38.8 51.37-38.8 35.13 0 52.2 23.31 52.2 71.28V588z"></path>
                        </svg>
                        <NavLink style={{ height: '100%' }} className="ref" to="/">
                            <Menu.Item className="text__fonts" name="Home">Home</Menu.Item>
                        </NavLink>
                        <NavLink className="ref" id="registerBlock" to="/blogs">
                            <Menu.Item className="text__fonts" name="Blogs">Blogs</Menu.Item>
                        </NavLink>
                        <NavLink className="ref" to="/users">
                            <Menu.Item className="text__fonts" name="Users">Users</Menu.Item>
                        </NavLink>
                        <NavLink className="ref"  to="/login">
                        <Menu.Item className="text__fonts" name="Login">Log in</Menu.Item>
                        </NavLink>
                        <NavLink className="ref"  to="/register">
                            <Menu.Item className="text__fonts" name="Register">Register</Menu.Item>
                        </NavLink>
                    </div>
                </div>
            </div>            
            <div style={{zIndex: 101}} className="popup_Reg" id="popup_Reg">
                <div className="popup__body_Reg">
                    <div style={{ position: 'relative' }} id="popup__content_Reg" className="popup__content_Reg">
                        <a style={{ textDecorationLine: 'none', position: 'absolute', right: '1px', top: '10px' }} className="ref" onClick={popupLoginCliseClick} >X</a>
                        <div style style={{ width: '490px', height: '590px', padding: '20px' }}>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <div style={{ backgroundColor: '', height: '130px', width: '130px', borderRadius: '50%', margin: '20px', border: '1px solid black' }}>
                                {userName 
                                    ? 
                                        <img style={{ width: '130px', borderRadius: '50%' }} src={user.base64URL} alt="" />
                                    :
                                        <img style={{ width: '100%', borderRadius: '50%' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png" alt="" />
                                }                                </div>
                            </div>
                            <h2 className="text__fonts" style={{ marginBottom: '10px' }}>Profil</h2>
                            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent:'center', alignContent: 'center'}}>
                                    <span className="text__fonts" style={{ color: 'gray' }}>user name</span>
                                    <h5 className="text__fonts">{userName}</h5>
                                    <span className="text__fonts" style={{ color: 'gray' }}>Email</span>
                                    <h5 className="text__fonts">{email}</h5>
                                    <span className="text__fonts" style={{ color: 'gray' }}>Phone</span>
                                    <h5 className="text__fonts">{phoneNumber}</h5>
                                    <div style={{ marginBottom: '6px' }} className="text-center">
                                        <NavLink style={{ height: '40px', width: '140px' }} to="/editprofil" className="btn btn-primary text__fonts">Edit</NavLink>
                                    </div>
                            </div>
                            <NavLink onClick={MyBlogssClick} to="/myblogs" className="btn btn-primary text__fonts" style={{ height: '40px', width: '140px' }}>My blogs</NavLink>
                            <form style={{ position: 'absolute', bottom: '10px' }} onSubmit={onSubmitLogout} method="post">
                                <button type="submit"  className="btn btn-danger text__fonts">Log out</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{zIndex: 102}} className="popup2_Reg" id="popup2_Reg">
                <div className="popup_2__body_Reg">
                    <div id="popup_2__content_Reg" className="popup_2__content_Reg">
                        <div style={{ position: 'relative' }}  className="popup_2_table_Reg">
                            <a href="#" style={{ position: 'absolute', top: '10px', right: '1px' }} onClick={ popLogoutCloseClick} >X</a>
                            <div style style={{ width: '260px', height: '200px', padding: '20px' }}>
                                <h4 id="text_information_Reg" className="text_information_Reg">Are you sure you want to log out of your account</h4>
                                <button onClick={LogoutAction} id="buttonConfirm_Reg" className="btn btn-danger">Confirm</button>
                                <div id="loader" style={{ display: 'none' }}>
                                    <div id="lds-ring" class="lds-ring"><div></div><div></div><div></div><div></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
 
}

export default Navbar