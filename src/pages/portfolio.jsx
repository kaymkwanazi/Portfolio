import React from 'react'
import MOVIE from '../assets/movie-blog.png'
import DRONES from '../assets/drones.png'

import Footer from '../components/footer'
function Portfolio() {
  return (
    <div className='portfolio'>
        
      <div className='row1'>
        <div className='project1'>
           <img src={MOVIE}></img>
        </div>
        <div className='movieInfo'>
          <h3>Project 1</h3>
          <h4>Movie Blog</h4>
          <p>This is a small blog I designed that outlines my all time favourite movies. 
              Browse through to learn a little more about me and my favourite movies. 
          </p>
            <a href='https://movie-blog-six.vercel.app/' className='button'>Click here to view more</a>
        </div>
      </div>

        <div className='row2'>
          <div className='drones'>
            <h3>Project 2</h3>
            <h4>Drones</h4>
            <p>This was part of the  assignments I did at Tshimologong Digital Hub. 
              It is a webpage about drones. The aim of the assignment was testing our CSS skill, therefore the links are non-responsive.
            </p>
            <a href='https://drones-webpage.vercel.app/' className='button'>Click here to view the page</a>
          </div>

            <div className='project2'>
              <img src={DRONES}></img>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio
