import React from "react"
import Navbar2 from "./Navbar2"
import '../syles/Home.css'
import imgFormater from "./imgFormater"
class Home extends React.Component{
    constructor(props){
        super(props)
    }
     onClickStartWrite(){
         const userName = localStorage.getItem('userName')
         if(userName != null){
            window.location = '/newblog'
         }
         else{
            window.location = '/login'
         }
    }
    
    render(){
        return(
            <>
                <Navbar2/>
                <div style={{ minHeight: '1000px', paddingTop: '132px', height: '100%', width: '100%', backgroundColor: 'rgb(242, 77, 46)' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '68%', height: 'auto', backgroundColor: 'rgb(242, 77, 46)', border: '1px solid black', borderTop: 'none', margin: 0, pading: 0, borderBottom: '2px solid black', paddingLeft: '20px' }}>
                            <div style={{ width: '70%', paddingLeft: '20px' }}>
                                <h1 className="hero-eyebrow">Start a blog for free</h1>
                                <h2 className="header-1">Publish, grow, and earn, all in one place.</h2>
                                <p className="paragraph">If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Sign up for free so your writing can thrive in a network supported by millions of readers — not ads.</p>
                               
                            </div>
                            <button onClick={this.onClickStartWrite} className="button__start__white">Start writing</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '32%', height: 'auto',  backgroundColor: 'rgb(242, 77, 46)', border: '1px solid black', borderTop: 'none',  borderBottom: '2px solid black' }}>
                            <img src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/White_face_left_Final.svg" loading="lazy" width="80%" style={{ margin: '70px 50px' }}  className="image-17"/> 
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home