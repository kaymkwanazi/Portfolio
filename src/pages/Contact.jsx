import React from 'react'
import Phone from '../assets/phone_logo.png'
import Email from '../assets/apple.png'
import Location from '../assets/gps.png'
import Footer from '../components/footer.jsx'

function Contact () {
  return (
    <>
    <div className='contact'>
      <h3 className='headingCont'>CONTACT</h3>
      <div className='row'>
        <div className='column1'>
            <p><label id='message'>Drop Me a Message:</label></p>
            <p> Feel free to contact me using the below contact information or send me a message. I would love to hear from you.</p>
                <div className='phone'>
                  <img className='phoneImg'src={Phone} width='40px'></img>
                  <p>072 563 1254</p>
                </div> 
                    <div className='email'>
                      <img className='emailImg'src={Email} width='40px'></img>
                      <p>Kamopmkwanazi@gmail.com</p>
                    </div>
                        <div className='location'>
                          <img className='locationImg'src={Location} width='40px'></img>
                          <p>175 Helen Joseph street, Pretoria CBD</p>
                        </div>
        </div>
        {/* 2nd column */}
        <div className='column2'>
            <form className='sendMessage'>
                <input type='text' id="name" placeholder='Name'></input>
                <input type='email' id= "email" placeholder='Email'></input>
                <textarea id ='message' placeholder='Message' rows='5' cols='50'></textarea>
                <input type='submit' value='Send'></input>
           </form> 
        </div>

      </div>
      <Footer/>
    </div>
    
    </>
  );
};

export default Contact