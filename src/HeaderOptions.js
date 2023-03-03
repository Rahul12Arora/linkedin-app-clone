import { Avatar } from '@mui/material'
import React from 'react'
import './CSS/Header.css';

function HeaderOptions({Icon,title, avatar}) {
  return (
    <div className='headerOptions'>
        { Icon && <Icon></Icon>}
        { avatar && <Avatar></Avatar>}
        <span>{title}</span>
    </div>
  )
}

export default HeaderOptions