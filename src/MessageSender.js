import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'; 
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';


function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const [input,setInput]=useState("");
    const [imageUrl,setImageUrl]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();


        db.collection("posts").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            ProfilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })

        //database stuff
        setInput("")
        setImageUrl("");

    }

    return (
        <div className="MessageSender">
            <div className="MessageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="MessageSender__input"
                    type="text" placeholder={`what's on your mind ${user.displayName}`}/>
                    <input
                    value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)} 
                     placeholder="image URL (Optional)"
                     type="text" />
                    
                     <button onClick={handleSubmit} type="submit">
                            Handle Submit
                     </button>
                </form>


            </div>
            <div className="MessageSender__bottom">
                 <div className="MessageSender__option">
                   <VideocamIcon  style={{color:"red"}} />
                   <h4>Live Video</h4>
                 </div>
                 <div className="MessageSender__option">
                        <PhotoLibraryIcon style={{color:"green"}} />
                        <h4>Photo/Video</h4>
                 </div>
                 <div className="MessageSender__option">
                      <InsertEmoticonIcon style={{color:"orange"}} />
                      <h4>Feeling/Activity</h4>
                 </div>
            </div>
        </div>
    )
}

export default MessageSender

