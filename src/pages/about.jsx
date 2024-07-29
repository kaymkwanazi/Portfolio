import React from 'react';
import Image from '../assets/IMG-20230928-WA0016.jpg'
import IMAGE2 from '../assets/c++.jpg'
import IMAGE3 from '../assets/XR (1).jpg'
import IMAGE4 from '../assets/userS.png'
import IMAGE5 from '../assets/icon.jpg'
import IMAGEJS from '../assets/js.jpg'
import IMAGEHTML from '../assets/html.jpg'
import Footer from '../components/footer';

function About () {
  return (
    <div className="about">
            <div className="aboutme">
                <h3>ABOUT ME</h3>
                <p>My name is Kamogelo Patience Mkwanazi, a passionate and dedicated Computer Systems Engineer with a love for web development.
                  My journey began at the Tshwane University of Technology where I discovered my love for technology. Since then, I've had an
                  opportunity to work on various projects. Currently I'm focused on web development, mainly front-end development.
                  I'm always open to new opportunities and collaborations.  
                </p>
              </div>
                
                <div className='myskills'>
                    <h3>MY SKILLS</h3>
                    <div className='icon-list'>
                        <div className='icon-item'>
                            <img src={IMAGE5}></img>
                            <span>React.JS</span>
                        </div>
                            <div className='icon-item'>
                                <img src={IMAGE2}></img>
                                <span>C++</span>
                            </div>
                                <div className='icon-item'>
                                    <img src={IMAGE3}></img>
                                    <span>XR Development</span>
                                </div>
                                    <div className='icon-item'>
                                      <img src={IMAGE2}></img>
                                      <span>C++</span>
                                    </div>
                                        <div className='icon-item'>
                                            <img src={IMAGEJS}></img>
                                            <span>JavaScript</span>
                                        </div>
                                            <div className='icon-item'>
                                                <img src={IMAGEHTML}></img>
                                                <span>JavaScript</span>
                                            </div>
                                              <div className='icon-item'>
                                                  <img src={IMAGE4}></img>
                                                  <span>JavaScript</span>
                                              </div>
                    </div>
              </div>
              <Footer />
      </div>
  );
};

export default About;
