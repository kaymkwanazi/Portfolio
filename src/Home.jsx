import Logo from './assets/logo.png'


function Home() {
    return (
      <>
        <div className='homepage'>
            <nav>
                <img className='logo' src={Logo} ></img>
                <ul>
                    <li><a href='home'>Home</a></li>
                    <li><a href='about'>About</a></li>
                    <li><a href='portfolio'>Portfolio</a></li>
                    <li><a href='contact'>Contact</a></li>
                </ul>
            </nav>
            <div>
              <p className='line1'>I'm a</p>
              <p className='line2'>FULL STACK</p>
              <p className='line2'>SOFTWARE DEVELOPER</p>
            </div>
        </div>
      </>
    )
  }
  
  export default Home