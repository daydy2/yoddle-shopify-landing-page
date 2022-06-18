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

              <div className="row">

                <div className="col-1-of-4 cole">
                  <div className="row__icon">
                    <i class="fa-solid fa-3x fa-circle-info"></i>
                  </div>
                  
                  <h3 className="heading-tertiary">Start an online</h3>
                  <p className='row-text-p'>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.</p>
                </div>

                <div className="col-1-of-4 cole">
                  <div className="row__icon">
                    <i class="fa-solid fa-2x fa-circle-info"></i>
                  </div>
                  <h3 className="heading-tertiary">Move your business online</h3>
                  <p className="row__text--p">
                    Turn your retail store into an online store and keep serving customers without missing a beat.
                  </p>
                </div>

                <div className="col-1-of-4 cole">
                  <div className="row__icon">
                    <i class="fa-solid fa-2x fa-circle-info"></i>
                  </div>
                  
                  <h3 className="heading-tertiary">Switch to Shopify</h3>
                  <p className="row__text--p">
                    Bring your business to Shopify, no matter which ecommerce platform you’re currently using.
                  </p>
                </div>

                <div className="col-1-of-4 cole">
                  <div className="row__icon">
                    <i class="fa-solid fa-2x fa-circle-info"></i>
                  </div>
                  
                  <h3 className="heading-tertiary">Hire a Shopify expert</h3>``
                  <p className="row__text-p">
                    Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section3">
            <div className="section3__header-text">
              <h1 className="section2__div-h1Text">
                With you wherever you're going
              </h1>
              <p className="section3__header-p">
              One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.
              </p>
            </div>
          </section>
          
        </main>
    </>
  )
}

export default Shopify