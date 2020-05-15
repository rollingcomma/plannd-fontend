import React, { useState } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form';
import AWS from 'aws-sdk'
import { addPicture } from '../../services/apiAction'
import { useUserState } from '../../context/customerHook'

const Uploader = ({albumId, handler}) => {
  const baseUrl = "http://craiglist2.s3-website.ca-central-1.amazonaws.com"
  
  const [message, setMessage] = useState("")
  const { handleSubmit, register, errors } = useForm();
  const [files, setFiles] = useState()
  const [UserState, dispatch] = useUserState()
  debugger

  const loadImageProcess = (src) => {
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => resolve({ width: img.width, height: img.height })
      img.onerror = reject
      img.src = src
    })
  }

  const onChange = (evt) => {
    setFiles(
      evt.target.files
    )

  }
  const uploadHandle = async () => {
    // e.preventDefault();
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = "ca-central-1";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ca-central-1:509094eb-e72d-4426-8174-ef1b58025133"
    });

    AWS.config.credentials.get(function (err) {
      if (err) alert(err);
      console.log(AWS.config.credentials);
    });
    debugger
    const bucketName = 'craiglist2'; // Enter your bucket name
    const bucket = new AWS.S3({
      params: {
        Bucket: bucketName
      }
    });

    // const files = formData.images;
    if (files) {
      const prefix = Math.round(new Date().getTime() / 1000).toString();
      if (files.length > 0) {
        const images = [];
        for (let i = 0; i < files.length; i++) {
          const objKey = `${prefix}/${files[i].name}`;
          const params = {
            Key: objKey,
            ContentType: files[i].type,
            Body: files[i],
            ACL: 'public-read'
          };
          console.log(objKey);
          bucket.putObject(params, function (err, data) {
            if (err) {
              setMessage('ERROR: ' + err)
              // message = 'ERROR: ' + err;
            } else {
              // listObjs(bucket, prefix);
              let width = 1;
              let height = 1;

              let imgObj = {}
              // src = window.URL.createObjectURL(files[i])
              loadImageProcess(window.URL.createObjectURL(files[i]))
                .then(img => {
                  if (img.width > img.height) {
                    width = 4;
                    height = 3
                  } else if (img.height > img.width) {
                    width = 3
                    height = 4
                  }
                  const src = `${baseUrl}/${objKey}`
                  imgObj = {
                    src: src,
                    width: width,
                    height: height
                  }
                  images.push(imgObj);
                  // console.log(imgObj)
                  setMessage('Success to upload ' + files[i].name)

                  if (images.length == files.length) {
                    addPicture(
                      UserState.user.preference.activeProject,
                      albumId,
                      {images:JSON.stringify(images)}
                    ).then(result => {
                      // console.log(result.data)
                      setMessage('Images were uploaded successfully')
                      setTimeout(handler(), 500)
                    })
                  }
                })
                .catch(err => {
                  console.log(err.message)
                })
              }
            })
          }
      } else {
        setMessage('No file selected.');
      }
    }

  };

  return (
    <div>
      
      <form onSubmit={handleSubmit(uploadHandle)}>
        <div className="form-group">
          <label for="images">Upload Image</label>
          <input type="file" name="images" onChange={onChange} multiple />
        </div>
        {message && <p>{message}</p>}
        <input type='submit' className="btn btn-info" name="newImage" />
      </form>
    </div>
  )
}
export default Uploader