import '../syles/CartMyBlogs.css'
function CartMyBlogs(props){
    async function onclickHendlerEdit(){
        
    }
    function foolScrinImg(){

        var font__container = document.getElementById('font__container')
        var card_img_top = document.getElementById('img')
        
        if(font__container.style.display === 'block'){
            font__container.style.display = 'none'
            card_img_top.classList.remove('active')
            card_img_top.classList.add('none')
        }
        else{
            font__container.style.display = 'block'
            card_img_top.classList.add('active')
        }
    }
    return(
        <>
            <div className="card_ main" style={{ width: '100%' }}>
                <div id="font__container" className="font__container"> </div>
                {/* onClick={foolScrinImg}  */}
                 <img src={props.info.base64URL} className="card-img-top" id="img"/> 
              
                <div className=""></div>
                <div>
                    <span><p className="text__fonts wi" style={{ marginLeft: '40px', marginRight: '40px', marginTop: '10px', marginBottom: '10px' }}>{props.info.information}</p></span>
                </div>
                <button onClick={onclickHendlerEdit} className="btn btn-primary">Edit</button>
                <hr style={{ width: '800px' }}/>
            </div>
            <h3 className="text__fonts wi">{props.info.title}</h3>
        </>
    )
}

export default CartMyBlogs