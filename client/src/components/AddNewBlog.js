import React, { useState } from 'react'
import Navbar from './Navbar'
import FormErrors from './FormErrors'

class AddNewBlog extends React.Component{
    constructor(props){
        super(props)
        this.AddNewClick = this.AddNewClick.bind(this)
        this.HendelHange = this.HendelHange.bind(this)
        this.handleFileInputChange = this.handleFileInputChange.bind(this)
        this.state = {
            title: '',
            information: '',
            titleImg: '',
            formErrors: {title: '', information: '', titleImg: ''},
            titleValid: false,
            informationValid: false,
            titleImgValid: false,
            formValid: false,
            file: null,
            base64URL: ""
        }
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors
        let titleValid = this.state.titleValid
        let informationValid = this.state.informationValid
        
      switch(fieldName) {
            case 'title':
                titleValid = value.length >= 5;
                fieldValidationErrors.title = titleValid ? '' : ' is invalid'
            break;
            case 'information':
                informationValid = value.length >= 15;
                fieldValidationErrors.information = informationValid ? '': ' is invalid';
            break;
            default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        titleValid: titleValid,
                        informationValid: informationValid,
                    
                      }, this.validateForm);

      }
      validateForm() {
        this.setState({formValid: this.state.titleValid &&
                                  this.state.informationValid });
      }

    HendelHange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    async AddNewClick(e){
        e.preventDefault()
        const userName = localStorage.getItem("userName")
        console.log("value: "+e.target[0].value)
        console.log("value: "+e.target[1].value)
        console.log("value: "+e.target[2].value)
        const title = e.target[0].value
        const information = e.target[1].value
        const base64URL = this.state.base64URL
        e.preventDefault()
        if(userName != null){
            const request = await fetch('https://localhost:44338/api/blogs/addnewblog', {
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    information,
                    base64URL,
                    userName
                })
            })
            if(request.ok === true){
                e.target[0].value = ''
                e.target[1].value = ''
                e.target[2].value = ''
                alert("Successfully")
                window.location = '/myblogs'
            }
        }
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
            console.log(baseURL);
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
            console.log("File Is", file);
            this.setState({
              base64URL: result,
              file
            });
          })
          .catch(err => {
            console.log(err);
          });
          console.log("Your img path:" +  localStorage.getItem("imgbase64"))
        this.setState({
          file: e.target.files[0]
        });
      };
   
    render(){
        return(
            <>
                <Navbar />
                
                <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: '132px' }}>
                    <h2>Create new post</h2>
                    <img style={{ width: '600px' }} src={this.state.base64URL} />
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div style={{ width: '60%' }}>
                        <form onSubmit={this.AddNewClick}> 
                            <div className="m3 m-2">
                                <input placeholder="Email addres path" type="text" value={this.state.title} name="title" onChange={this.HendelHange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="m3">
                                <div className="form-floating">
                                    <textarea value={this.state.information} name="information" onChange={this.HendelHange} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label style={{ color: 'gray' }} htmlFor="floatingTextarea">Main information</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', disabled: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <label style={{ color: 'gray' }} htmlFor="floatingTextarea">Сhoose a picture for the post</label>
                                <input style={{ marginTop: '10px', marginBottom: '10px', width: '40%' }} className="btn btn-primary" type="file" name="file" onChange={this.handleFileInputChange} />
                            </div>
                            <button disabled={!this.state.formValid} type="submit" class="btn btn-primary text__fonts">Add</button>
                        </form>
                        
                    </div>
                </div>
            </>
        )
    }
    
}
export default AddNewBlog