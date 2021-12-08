import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
class EditProfil extends React.Component{
    constructor(props){
        super(props)
        this.onSubmitEdit = this.onSubmitEdit.bind(this)
        this.FetchBase64 = this.FetchBase64.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            file: null,
            base64URL: "",
            user: {},
            year: 0, 
            myInformation: localStorage.getItem('myInformation'), 
            base64URL: '', 
            rate: 0
        }
        
    }

    componentDidMount(){
        const myInformaation_ = "localStorage.getItem('myInformation')"
    }
    componentDidUpdate(){
        const myInformaation_ = "localStorage.getItem('myInformation')"
    }

    getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
           
            resolve(baseURL);
            };
            console.log(fileInfo);
        });
        };
    
    handleFileInputChange = e => {
    console.log(e.target.files[0]);
    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64(file)
        .then(result => {
            localStorage.setItem("imgbase64", file["base64"] = result)
        file["base64"] = result;
        
        this.setState({
            base64URL: result,
            file
        });
        })
        .catch(err => {
        console.log(err);
        });
    this.setState({
        file: e.target.files[0]
    });
    };
    
    async FetchBase64(){
        const base64URL = this.state.base64URL
        const userName = localStorage.getItem('userName')
        const myInformation = this.state.myInformation
        const result = await fetch(`https://localhost:44338/api/users/addbase64/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                base64URL,
                userName,
                myInformation
            })
        })
        if(result.ok === true){
            window.location = '/blogs'
            localStorage.setItem('myInformation', this.state.myInformation)
        }
    }
    async onSubmitEdit(e){
        e.preventDefault()
        this.FetchBase64()
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({
          [name]: value
        });
      }
    render(){
        return(
            <>
                <Navbar />
                <div style={{paddingTop: '132px'}}>
                    <h2>Edit profil</h2>
                    <form onSubmit={this.onSubmitEdit}> 
                        <div style={{ display: 'flex', flexDirection: 'column', disabled: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="mb-3">
                            <div className="form-text text__fonts">Enter your user name.</div>
                                <textarea  style={{ color: 'black', width: '300px' }} htmlFor="floatingTextarea" type="text"  onChange={this.handleInputChange} value={this.state.myInformation} className="form-control" id="exampleInputEmail1" name="myInformation" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3" style={{ display: 'flex', flexDirection: 'column'}}>
                                <label style={{ color: 'gray' }} htmlFor="floatingTextarea">Сhoose a picture for the post</label>
                                <input style={{  }} className="btn btn-primary" type="file" name="file" onChange={this.handleFileInputChange} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary text__fonts">Edit</button>
                    </form>
                    <NavLink style={{ marginTop: '10px' }} to="/changepassword" className="btn btn-primary text__fonts">Change password</NavLink>
                </div>
            </>
        )
    }
}

export default EditProfil