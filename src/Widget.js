import React from 'react'
import './CSS/widget.css'
import InfoIcon from '@mui/icons-material/Info';
function Widget() {
  return (
    <div className='widget'>
        <div className='widget__upper'>

            <div className='widget__heading'>
                <h4 className='widget__title'>Linkedin News</h4>
                <InfoIcon></InfoIcon>
            </div>

            <ul className='widget__data'>
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
                
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
            </ul>

        </div>


        <div className='widget__upper widget__lower'>

            <div className='widget__heading'>
                <h4 className='widget__title'>Linkedin News</h4>
                <InfoIcon></InfoIcon>
            </div>

            <ul className='widget__data'>
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
                
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
                <li>
                <div className='widget__info__message'>Slaying Job Search</div>
                <div className='widget__info__subdata'>
                    <span className='widget__info__time'>6d ago</span>
                    <span className='widget__info__readers'>4242 readers</span>
                </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Widget