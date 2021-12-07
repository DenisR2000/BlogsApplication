import { useState} from 'react'
import Navbar from './Navbar'

function ChangePassword(){
    const [curentPassword, setCurentPassword] = useState("")
    const [newPassword, setNewtPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const userName = localStorage.getItem('userName')

    async function onSubmitChangePassword(e){
        e.preventDefault()
        const request = await fetch('https://localhost:44338/api/accountactions/changepassword', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName,
                curentPassword,
                newPassword
            })
        })
        if(request.ok === true){
            let popup = document.getElementById('popup_Sesesfuly')
            let popup_content = document.getElementById('popup__content_Sesesfuly')
            popup_content.classList.add('animate')
            popup.style.visibility = 'visible'
            popup.style.opacity = 1
            setTimeout(() => {
                let popup = document.getElementById('popup_Sesesfuly')
                let popup_content = document.getElementById('popup__content_Sesesfuly')
                popup_content.classList.remove('animate')
                popup.style.visibility = "hidden"
                popup.style.opacity = 0
                popup.style.transition = "all 2s";
                window.location = '/blogs'
            }, 2500)
            
        }
        else{
            alert("Error change password")
        }
    }
    return(
        <> 
            <Navbar />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', backgroundColor: 'white', paddingTop: '132px' }}>
                <h2 className="text__fonts_title">Change password</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', padding: '10px', width: '69%', flex: '1 1 auto'  }} >
                    <form onSubmit={onSubmitChangePassword}>
                        <div className="mb-3">
                            <label  style={{ color: 'black' }} className="form-label text__fonts">Curent password</label>
                            <input type="password" value={curentPassword} onChange={e => setCurentPassword(e.target.value)} className="form-control" id="exampleInputEmail1" name="userName" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label style={{ color: 'black' }} className="form-label text__fonts">New password</label>
                            <input type="password" value={newPassword} onChange={e => setNewtPassword(e.target.value)} className="form-control" id="exampleUserName"  aria-describedby="userNameHelp" />
                        </div>
                        <button type="submit" className="btn btn-primary text__fonts">Login</button>
                    </form>
                </div>
            </div> 

            <div className="popup_Sesesfuly" id="popup_Sesesfuly">
                <div className="popup__body_Sesesfuly">
                    <div id="popup__content_Sesesfuly" class="popup__content_Sesesfuly">
                        <div className="popup__text_Sesesfuly text__fonts">successfully</div>
                        <div style style={{ width: '250px', height: '120px', padding: '20px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                           <h2 className="text__fonts">{userName}, Your password has been changed</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ChangePassword
