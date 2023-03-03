import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './CSS/Header.css';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></img></div>
            <div className='header__search'>
                <SearchIcon></SearchIcon>
                <input type="text" placeholder='Search'></input>
                </div>
        </div>
        <div className='header__right'>
          <HeaderOptions Icon={HomeIcon} title="Home"></HeaderOptions>
          <HeaderOptions Icon={PeopleIcon} title="My Network"></HeaderOptions>
          <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"></HeaderOptions>
          <HeaderOptions Icon={ChatIcon} title="Messages"></HeaderOptions>
          <HeaderOptions Icon={NotificationsIcon} title="Notifications"></HeaderOptions>
          <HeaderOptions avatar={AccountCircleIcon} title="Rahul Arora"></HeaderOptions>
        </div>
    </div>
  )
}

export default Header