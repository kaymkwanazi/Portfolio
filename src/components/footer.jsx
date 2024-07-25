import React from 'react'
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'


function Footer() {
  return (
<>
    <div>
        <hr></hr>
        <footer>
            <div className='leftside'>
                <img className='logo' src={Logo}></img>
            </div>
            <div className='est'><p>2024 - KP Mkwanazi. All rights reserved</p></div>
            <div className='socials'>
                <a href='https://www.facebook.com/profile.php?id=100006812869177'><img className='facebook' src={Facebook}></img></a>
                <a href='https://www.linkedin.com/in/kamogelo-mkwanazi-b140a7253/'><img className='linkedin' src={Linkedin}></img></a>
            </div>
        </footer>
    </div>
</>
  )
};
export default Footer