import Image from '../assets/IMG-20230928-WA0016.jpg'
import Footer from '../components/footer';

const Home = () => {
    return (
      
        <div className='homepage'>
            <div className='row'>
              <div className='column'>
                <p className='line2'>Hey there, I'm a</p>
                <p className='line2'>FRONT END</p>
                <p className='line2'>SOFTWARE DEVELOPER</p>

                <div className="prev">
                  <a href="portfolio">
                  <button>Previous Projects</button>
                  </a>
                </div>
            </div>

            <div className="picture">
                <img className="myPic" src={Image}></img>
              </div>
            </div>
            
          <Footer/>
        </div>
      
    );
  };
  
  export default Home;