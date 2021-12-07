import { useState } from 'react'
import '../syles/Login.css'
import Navbar from './Navbar'
import imgFormater from './imgFormater'

export function Register(){

    const [email, SetEmail] = useState("")
    const [userName, SetUserName] = useState("")
    const [phoneNumber, SetPhoneNumber] = useState("")
    const [password, SetPassword] = useState("")
    const [confirmPassword, SetConfirmPassword] = useState("")

    async function onSubmitClick(e){
        e.preventDefault()
        if(localStorage.getItem('userName') === null){
            const request = await fetch('https://localhost:44338/api/accountactions/registration', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   userName, 
                   email, 
                   phoneNumber,
                   password,
                   confirmPassword
                })
           })
           if(request.ok === true){
               localStorage.setItem('userName', userName);
               localStorage.setItem('email', email);
               localStorage.setItem('phoneNumber', phoneNumber);
               localStorage.setItem('password', password);
               e.target[0].value = ''
               e.target[1].value = ''
               e.target[2].value = ''
               e.target[3].value = ''
               e.target[4].value = ''
               alert("Successfully")
               window.location = '/'
           }
           else{
               let popup = document.getElementById('popup')
               let popup_content = document.getElementById('popup__content')
               popup.style.visibility = 'visible'
               popup.style.opacity = 1
               popup_content.classList.add('animate')
               setTimeout(() => {
                   let popup = document.getElementById('popup')
                   let popup_content = document.getElementById('popup__content')
                   popup_content.classList.remove('animate')        
                   popup.style.transition = "all 2s";
                   popup.style.visibility = 'hidden'
                   popup.style.opacity = 0
               }, 2700)
           }
        }
        else{
            let popup = document.getElementById('popup2')
            let popup_content = document.getElementById('popup_2__content')
            popup_content.classList.add('animate')
            popup.style.visibility = 'visible'
            popup.style.opacity = 1
            setTimeout(() => {
                let popup = document.getElementById('popup2')
                let popup_content = document.getElementById('popup_2__content')
                popup_content.classList.remove('animate')
                popup.style.visibility = "hidden"
                popup.style.opacity = 0
                popup.style.transition = "all 2s";
            }, 2500)
        }
    }

    return(
        <>
        <Navbar />
        
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', paddingTop: '132px' }}>
            <h2 className="text__fonts text__fonts" style={{ marginBottom: '20px', marginTop: '10px', color: 'black' }}>Register component</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column',  backgroundColor: 'rgba(255, 255, 255)', padding: '10px', width: '69%', flex: '1 1 auto'  }} >
                    <form onSubmit={onSubmitClick}>
                        <div className="mb-3">
                            <label style={{  color: '#000' }} className="form-label text__fonts">Email address</label>
                            <input type="email" value={email} onChange={e => SetEmail(e.target.value)} className="form-control text__fonts" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label style={{ color: '#000' }} className="form-label text__fonts">User Name</label>
                            <input type="text" value={userName} onChange={e => SetUserName(e.target.value)} className="form-control text__fonts" id="exampleUserName"  aria-describedby="userNameHelp" />
                        </div>
                        <div className="mb-3">
                            <label style={{ color: '#000' }} className="form-label text__fonts">Phone number</label>
                            <input type="text" value={phoneNumber} onChange={e => SetPhoneNumber(e.target.value)} className="form-control text__fonts"/>
                        </div>
                        <div className="mb-3">
                            <label style={{  color: '#000' }} className="form-label text__fonts">Password</label>
                            <input type="password" value={password} onChange={e => SetPassword(e.target.value)}  className="form-control text__fonts"  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text__fonts" style={{ color: '#000' }} >Confirm Password</label>
                            <input type="password" value={confirmPassword} onChange={e => SetConfirmPassword(e.target.value)} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary text__fonts" style={{ color: 'white' }}>Register</button>
                    </form>
                </div>
            </div>

            <div className="popup" id="popup">
                <div className="popup__body">
                    <div id="popup__content" class="popup__content">
                        <div className="popup__text text__fonts">Notification</div>
                        <div style style={{ width: '250px', height: '120px', padding: '20px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                           <h2 className="text__fonts">Registration error</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popup2" id="popup2">
                <div className="popup_2__body">
                    <div id="popup_2__content" className="popup_2__content">
                        <div className="popup_2__text"></div>
                        <div className="popup_2_table">
                            <div style style={{ width: '200px', height: '150px', padding: '20px' }}>
                                <h2 className="text__fonts">You are alredi register</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
    
  
}

export default Register