import React, { useState,useEffect } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Story from './Story';
 import Post from './Post';
 import db from './firebase';

function Feed() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        );

    },[])
    return (
        <div className="Feed">
            {/* stories */}
            <Story />
            {/* send anything */}
            <MessageSender />
            {/* all posts */}
          {posts.map((post)=>(
              <Post 
                key={post.id}
                ProfilePic={post.data.ProfilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
              />
          ))}

            {/* <Post 
              
              ProfilePic="https://thumbs.dreamstime.com/z/handsome-man-getting-ready-morning-18382492.jpg"
              message="this works"
              timestamp="12:02"
              username="alok kumar"
              image="https://th.bing.com/th/id/OIP.QzOtTrWJ3-riXiQM2jx74gHaLH?pid=Api&rs=1"
            />
            */}

        </div>
    )
}

export default Feed
