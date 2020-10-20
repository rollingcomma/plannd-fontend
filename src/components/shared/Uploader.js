import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import AWS from 'aws-sdk'
import { addPicture, addProfilePictures } from '../../services/apiAction'
import { useUserState } from '../../context/customerHook'

const Uploader = (
  { toAlbum, 
    albumId, 
    handleFormState, 
    handleUpdateState}) => {
  const baseUrl = "https://craiglist2.s3.amazonaws.com"
  
  const [message, setMessage] = useState("")
  const { handleSubmit} = useForm();
  const [files, setFiles] = useState()
  const [ userState ] = useUserState()
  
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
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = "ca-central-1";
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ca-central-1:509094eb-e72d-4426-8174-ef1b58025133"
    });

    AWS.config.credentials.get(function (err) {
      if (err) alert(err);
      console.log(AWS.config.credentials);
    });
    
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
          const objKey = `plannd/${prefix}-${files[i].name}`;
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
              const src = `${baseUrl}/${objKey}`
              // src = window.URL.createObjectURL(files[i])
              if(toAlbum) {
                let width = 1;
                let height = 1;

                let imgObj = {}
                loadImageProcess(window.URL.createObjectURL(files[i]))
                .then(img => {
                  if (img.width > img.height) {
                    width = 4;
                    height = 3
                  } else if (img.height > img.width) {
                    width = 3
                    height = 4
                  }
                  imgObj = {
                    src: src,
                    width: width,
                    height: height
                  }
                  images.push(imgObj);
        
                  // console.log(imgObj)
                  setMessage('Success to upload ' + files[i].name)

                  if (images.length === files.length) {
                    addPicture(
                      userState.user.preference.activeProject,
                      albumId,
                      { images: JSON.stringify(images) }
                    ).then(result => {
                      // console.log(result.data)
                      setMessage('Images were uploaded successfully')
                      setTimeout(handleFormState(), 800)
                      handleUpdateState(images)
                    })
                  }
                })
                .catch(err => {
                  console.log(err.message)
                })
              } else {
                setMessage('Success to upload ' + files[i].name)
                images.push(src)
                if (images.length === files.length) {
                  addProfilePictures(userState.user._id, {images: JSON.stringify(images) } )
                  .then(res => {
                    setMessage('Images were uploaded successfully')
                    setTimeout(handleFormState(), 1000)
                    console.log(res.data)
                    handleUpdateState(res.data.result)
                  })
                  .catch(err => {
                    console.log(err.message)
                  })
                }
              }
            }
          })
        }
      } else {
        setMessage('No file selected.');
      }
    }

  };

  return (
    <div className="mt-2 p-2">
      <form className="d-flex flex-row" onSubmit={handleSubmit(uploadHandle)}>
        <div className="custom-file">
          <input type="file" className="custom-file-input" name="images" onChange={onChange} multiple accept="image/png, image/jpeg, image/jpg"/> 
            <label className="custom-file-label" htmlFor="images">{files? files[0].name:"Choose file"}</label>
        </div>
        {message && <p>{message}</p>}
        
        <input type='submit' className="btn btn-info ml-3" name="newImage" />
        <button type='button' className="btn btn-info ml-3" name="cancel" onClick={handleFormState}>Cancel</button>
      </form>
    </div>
  )
}
export default Uploader