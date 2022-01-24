import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import {storage,db} from "./firebase"
import firebase from "firebase";
import './ImageUpload.css'

function ImageUpload({username}) {
    const [caption,setCaption]= useState('');
    const [image,setImage]=useState('');
    const [progress,setProgress]=useState(0);
    const handleChange=(e)=>
    {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }
    const handleUpload=()=>
    {
        //progress function
      const uploadTask=storage.ref(`images/${image.name}`).put(image)
      uploadTask.on(
          "state_changed",
          (snapshot)=>{
              const progress=Math.round(
                  (snapshot.bytesTransferred/snapshot.totalBytes)*100
              )
              setProgress(progress)
          },
          (error)=>
          {
              alert(error.message)
          },
          ()=>{
              //complete function
              storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url=>
                {
             //post image inside database
             db.collection("posts").add({
                 timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                 caption:caption,
                 imageUrl:url,
                 username:username
             })
             setProgress(0)
             setCaption("")
             setImage(null)
                })
          }
      )
    }

    return (
        <div className="imageupload">
            
      {/*i want to have */}
      {/* caption */}
      {/* file picker*/}
       {/* post button*/}
       <progress className="imageupload_progress" value={progress} max="100"/>
<input type="text" placeholder='Enter a caption ...' onChange={(event)=> setCaption(event.target.value)}/>
<input type="file" onChange={handleChange}/>
<Button onClick={handleUpload}>Upload</Button>

        </div>
    )
}

export default ImageUpload
