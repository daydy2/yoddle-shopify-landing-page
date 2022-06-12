import React from 'react'
import Navbar from '../Navbar/Navbar'
import playIcon from '../../img/icons8-play-24.png'
import sam1 from '../../img/sam1.jpg'
import sam2 from '../../img/sam2.jpg'
import sam3 from '../../img/sam3.jpg'
import sam4 from '../../img/sam41.jpg'
import sam5 from '../../img/sam5.jpg'
import './shopify.css'

const Shopify = () => {
  const handleForm = (event) => {
    event.preventDefault();
  }

  return (
    <>
        <main className='main'>
        <Navbar />
          <section className="section">
            {/* <Navbar /> */}
            
              <div className="section__div1">
                <div className=" section__div1-emailForm ">               
                  <p className="section__div1-text">Build an online business—no matter what business you’re in</p>
                
                  <form onSubmit={handleForm} className='section__div1-form'>
                    <label for="useremail"></label>
                    <input type="email" name="useremail" id="useremail" placeholder='Enter your email address'/>
                    <button type="submit"> Start free trial</button>
                  </form>

                  <p className='section__div1-pText'>Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
                </div>
              </div>
              <div className="section__div2">
                <div className="section__div2-playVideo">
                  <div className="section__div2-icon">
                    <img src={playIcon} alt="play icon" />
                  </div>
                  <span className='section__div2-spanText'>Play video</span>
                </div>
                
              </div>
           
          </section>

          <section className="section2">
            <div className="section2__div-adText">
              <h1 className="section2__div-h1Text">Bring your business online</h1>
              <p className='section2__div-pText'>Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</p>
              <p className='section2__div-pExample'>
                Explore more examples
                <span className="section2__div-pExample-icon">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </p>
              <ul className="section2__ul">

                <li className="section2__ul-listItem margBotRight">
                  <img src={sam1} class="img-fluid" alt="card 1" />
                  <p className="section2__ul-listItemP1"><a href="#">food & drink</a></p>
                  <p className="section2__ul-listItemP2">Alfred</p>
                </li>

                <li className="section2__ul-listItem margBot">
                  <img src={sam2} class="img-fluid" alt="card 2"/>
                  <p className="section2__ul-listItemP1"><a href="#">Jewelry</a></p>
                  <p className="section2__ul-listItemP2">Corey Moranis</p>
                </li>

                <li className="section2__ul-listItem margBot">
                  <img src={sam3} class="img-fluid" alt="card 3" />
                  <p className="section2__ul-listItemP1"><a href="#">food & drink</a></p>
                  <p className="section2__ul-listItemP2">Detour Coffee</p>
                </li>

                <li className="section2__ul-listItem margBot">
                  <img src={sam4} class="img-fluid" alt="card 4"  />
                  <p className="section2__ul-listItemP1"><a href="#">Beauty & cosmetics</a></p>
                  <p className="section2__ul-listItemP2">then i met you</p>
                </li>

                <li className="section2__ul-listItem margBotLeft">
                  <img src={sam5} class="img-fluid" alt="card 5"  />
                  <p className="section2__ul-listItemP1"><a href="#">Home & garden</a></p>
                  <p className="section2__ul-listItemP2">Miss boon</p>
                </li>  

              </ul>
            </div>

            <div className="section2__div-footer">
              <h2 className="section2__h2-heading">Take the best path forward</h2>

              <div className="section2__div-footerQ">
                
              </div>
            </div>
          </section>
          
        </main>
    </>
  )
}

export default Shopify