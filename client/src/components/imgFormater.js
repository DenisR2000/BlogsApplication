import React from "react";

class imgFormater extends React.Component {
  state = {
    file: null,
    base64URL: ""
  };

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
      console.log("Your img path:" + this.state.base64URL)
    this.setState({
      file: e.target.files[0]
    });
  };

  render() {
    return (
      <div>
        <input style={{ height: '50px', width: '100px', backgroundColor: 'blue' }} value="File" className="btn btn-primary" type="file" name="file" onChange={this.handleFileInputChange} />
      </div>
    );
  }
}

export default imgFormater;