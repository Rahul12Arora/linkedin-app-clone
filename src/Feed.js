import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './CSS/feed.css'
import Post from './Post';
// import firebase from 'firebase'
// import {db} from './firebase'

function Feed() {

    // const [enteredMessage, setEnteredMessage] = useState(''); //used for single post testing
    const [custompostmessage, setcustompostmessage] = useState([{id:2,message:"message2"}, {id:1,message:'message1'}]);


    const submitHandler = (event) =>{
        event.preventDefault();
        const entrydata = document.querySelector('.feedmessagegiver').value;
        setcustompostmessage(
            [
            
            {   id:custompostmessage.length+1,
                message:entrydata
            },
            ...custompostmessage
            ]
        )
        document.querySelector('.feedmessagegiver').value='';
    }

    

  return (

    <div className='feed'>
        <div className='feed__input'>

            <div className='feed__profile'>
            <Avatar></Avatar>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter Something...' className='feedmessagegiver' ></input>
                {/* onChange={messageChangeHandler} value={enteredMessage} */}
                <input type="submit"></input>
            </form>
            </div>
            

        <div className='feedoptions'>
            <div className='option'>
                <InsertPhotoIcon style={{color:"#70b5f8"}}></InsertPhotoIcon>
                <span>Photo</span>
            </div>
            <div className='option'>
                <YouTubeIcon style={{color:"#5f9b41"}}></YouTubeIcon>
                <span>Video</span>
            </div>
            <div className='option'>
                <EventIcon style={{color:"#37a33e"}}></EventIcon>
                <span>Event</span>
            </div>
            <div className='option'>
                <AssignmentIcon style={{color:"#fc9295"}}></AssignmentIcon>
                <span>Write Article</span>
            </div>
        </div>
        </div>
        
        {/* <Post name="Rahul Arora" description="Web Developer" message={enteredMessage} photourl="https://picsum.photos/536/354"></Post> */}
        {custompostmessage.map( data => <Post key={data.id} name="Rahul Arora" description="Web Developer" message={data.message} photourl="https://picsum.photos/536/354"></Post>)}
    </div>
  )
}

export default Feed
