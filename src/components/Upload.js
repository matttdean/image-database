import React, { Component, Fragment } from "react";
import ReactDropzone from "react-dropzone";
import request from "superagent";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
     });

     // POST to a test endpoint for demo purposes
    const req = request.post('https://httpbin.org/post');

    files.forEach(file => {
      req.attach(file.name, file);
    });

    req.end();

  }

  render() {
    const previewStyle = {
      display: 'block',
      width: '10%',
      height: 'auto'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}> 
            <div className="dropContainer">
            <div className="filesUploadingContainer">
                {this.state.files.length > 0 &&
                    <Fragment>
                        {this.state.files.map((file) => (
                            <div className="filesUploading">
                        <h6>{file.name}</h6>
                        <img
                            alt="Preview"
                            key={file.preview}
                            src={file.preview}
                            style={previewStyle}
                        />
                        </div>
                        ))}
                    </Fragment>
                    }
                </div>
            <ReactDropzone
            className="drop"
            accept="image/*"
            onDrop={this.onPreviewDrop}
            >
            Drop images here.
            </ReactDropzone>
            <input 
                type="text"
                placeholder="Title"
                className ='pa3 ba b--lightest-blue bg-washed-blue'
            />
            <input 
                type="text"
                placeholder="tags"
                className ='pa3 ba b--lightest-blue bg-washed-blue'
            />
            <button className="f6 link dim br3 ba ph3 pv2 mb2 dib dark-green">
                Upload
            </button>
        </div>
      </div>
    );
  }
}

export default Upload;