import { Avatar } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './CSS/post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import Feed from './Feed';


function Post({name, description, message, photourl}) {

  return (
    <div className='posts'>
        <div className='post__header'>
            <div className='post__header__left'>
                <Avatar src={photourl}></Avatar>
                <div className='post__profile__details'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <MoreVertIcon></MoreVertIcon>
        </div>
        <div className='post__body'>
          <p>{message}</p>
        </div>

        <div className='post__footer'>
            <div className='post__footer__option'>
                <ThumbUpIcon></ThumbUpIcon>
                <span>Like</span>
            </div>
            <div className='post__footer__option'>
                <ChatIcon></ChatIcon>
                <span>Comment</span>
            </div>
            <div className='post__footer__option'>
                <RepeatIcon></RepeatIcon>
                <span>Share</span>
            </div>
            <div className='post__footer__option'>
                <SendIcon></SendIcon>
                <span>Send</span>
            </div>
        </div>
        
    </div>
  )
}

export default Post