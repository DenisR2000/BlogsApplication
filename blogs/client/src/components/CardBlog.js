import '../syles/CartBlog.css'
import { useState, useEffect} from 'react'
function CardBlog( props ){

    const [user, setUser] = useState({})
    useEffect(() => {
        GetUsers()
    },[] )
    function GetUsers(){
        props.users.map((user, i) => {
            if(props.info.userId === user.id){
                setUser(user)
            }
        })
    }
   
    function Details(){
        localStorage.setItem('infoblogId', props.info.blogId)
        window.location = '/bloginfo'
    }

   function onClickuser(){
       localStorage.setItem('infoUserId', user.id)
       window.location = '/profil'
   }
   function onClickImg(){
       console.log("open img")
       const imgOpen = document.getElementById('card-img-top')
       imgOpen.classList.add('imgOpen')
   }

    return(
        <>
            <div className="card_" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', width: '80%', alignItems: 'center', marginLeft: '10px'}}>
                    <img style={{ width: '10%', borderRadius: '50%' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png" alt="" />
                    <span onClick={onClickuser} style={{cursor: 'pointer'}}>{user.userName}</span>
                </div>
                <div style={{width: '80%'}}>
                    <h3 style={{ fontSize: '36px', fontWeight: 'bold' }} className="text__header">{props.info.title}</h3>
                </div>
                <div style={{height: 'auto', width:'auto', cursor: 'pointer'}} onClick={onClickImg} className="">
                    <img id="card-img-top" style={{ width: '80%' }} src={props.info.base64URL} className="card-img-top" /> 
                </div>
                <div style={{width: '80%'}}> 
                    <span>
                        <p className="text__fonts clip" style={{ color: 'gray', marginLeft: '40px', marginRight: '40px', marginTop: '10px',fontFamily: "charter, Georgia, Cambria, Times New Roman Times, serif", marginBottom: '10px', fontSize: '24px'  }}>{props.info.information}</p>
                    </span>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <span onClick={Details} style={{ cursor: 'pointer', margin: '3px' }} className="" >main read</span>
                        <svg style={{ marginTop: '7px' }}>
                            <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"> </path>
                        </svg> 
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default CardBlog