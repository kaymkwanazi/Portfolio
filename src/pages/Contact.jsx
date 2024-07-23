import React from 'react'
import Phone from '../assets/phone_logo.png'
import Email from '../assets/apple.png'
import Location from '../assets/gps.png'

function Contact () {
  return (
    <div className='contact'>
      <h3 className='headingCont'>CONTACT</h3>
      <div className='cust-row'>
          <p><label id='message'>Drop Me a Message:</label></p>
          <textarea id ='message' name='message' rows='5' cols='50'></textarea>
            
            <div className='phone'>
              <img className='phoneImg'src={Phone} width='40px'></img>
              <p>072 563 1254</p>
            </div>

            <div className='email'>
              <img className='emailImg'src={Email} width='40px'></img>
              <p>kamo@gmail.com</p>
            </div>

            <div className='location'>
              <img className='locationImg'src={Location} width='40px'></img>
              <p>123 First street</p>
            </div>

            <form className='sendMessage'>
              <input type='text'></input>
            </form>
        </div>

    </div>
      
  );
};

export default Contact