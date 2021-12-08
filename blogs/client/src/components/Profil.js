import '../syles/Profil.css'
import {useEffect, useState} from 'react'

function Profil(props){
    const [user, setUser] = useState({})
    const id = localStorage.getItem('infoUserId')

    useEffect(() => {
        async function getUSer(){
            const response = await fetch(`https://localhost:44338/api/users/getuser/${id}`)
            const date = await response.json()
            setUser(date)
            console.log(date.email)
        }
        function colorGen() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            document.getElementById("code_color").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        }
        getUSer()
        colorGen()
    }, [props])

    return(
        <>
            <div className="text-center" style={{paddingTop: '0px'}}>
                <div id="code_color" style={{height: '350px', width: '100%', padding: '30px', paddingLeft: '80px', display: 'flex', flexDirection: 'row',  justifyContent: 'left', color: '#fff'}} class="code_color">
                   {user.userName}
                </div>
                <div style={{ width: '100%' }}></div>
            </div>
        </>
    )
}
export default Profil