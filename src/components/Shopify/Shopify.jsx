import React from 'react'
import Navbar from '../Navbar/Navbar'
import playIcon from '../../img/icons8-play-24.png'
import sam1 from '../../img/sam1.jpg'
import sam2 from '../../img/sam2.jpg'
import sam3 from '../../img/sam3.jpg'
import sam4 from '../../img/sam41.jpg'
import sam5 from '../../img/sam5.jpg'
import mrkt from '../../img/mrkt.jpg'
import mng from '../../img/mng.jpg'
import cobe from '../../img/cobe-alt.png'
import chio from '../../img/chioma.jpg'
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
                    <i class="fa-solid fa-2x fa-circle-info"></i>
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
              <h1 className="section2__div-h1Text section3-h1">
                With you wherever you're going
              </h1>
              <p className="section3__header-p">One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.</p>
            </div>

            {/* START OF FLEXBOX LAYOUT */}

            <div className="section3__wrapper">
            
              <div className="section3__wrapper-webm">
                <video controls autoplay loop='loop' playsInline='playsonline' datat-autoplay='true' data-lazyload='true' data-poster='https://cdn.shopify.com/shopifycloud/brochure/assets/home/market-small-084eab2d72b510555838c446501d27dd7380585450efcaaa97453289b2b69c79.jpg' data-event-page='homepage' data-event-category='homepage'
                data-event-action='sell' data-event-label='video-toggle' class='video__toggle' >
                  <source src='https://cdn.shopify.com/shopifycloud/brochure/assets/home/sell-animation-desktop-1b186d853b04bce6dbc12bb63bd5bc4bc1ff60cd1a06fd12f85261c8acc66d0a.webm' type='video/webm' />
                  Sorry your browser doesn't support embedded videos.
                </video>
              </div>
              <div className="section3__wrapper-seller">
                <div className="section-boxInfo">
                  <h2 section-boxInfo--h2>
                    Sell everywhere
                  </h2>
                  <p className='sellerText'>
                    Use one platform to sell products to anyone, anywhere—in person with Point of Sale and online through your website, social media, and online marketplaces.
                  </p>
                  <a href="#!" class='anc'>Explore ways to sell <span class='arr'>&rarr;</span></a>
                  
                </div>
              </div>

            </div>
            {/*END OF FLEXBOX LAYOUT */}

            {/* START OF FLEXBOX2 LAYOUT */}
            <div className="section3__wrapper">
              <div className="section3__wrapper-seller">
                <div className="section-boxInfo">
                  <h2 className='section-boxInfo--h2'>Market your business</h2>
                  <p className='sellerText secondText'>
                  Take the guesswork out of marketing with built-in tools that help you create, execute, and analyze digital marketing campaigns.
                  </p>
                  <a href="#!" class='anc'>Explore how to market your business <span class='arr'>&rarr;</span></a>
                </div>

                
              </div>

              <div className="section3__wrapper-webm ">

                <img src={mrkt} alt="marketing your business"  className='flexImage'/>
              </div>
              
            </div>
            
            {/*END OF FLEXBOX2 LAYOUT */}

            {/* START OF FLEXBOX3 LAYOUT */}
            <div className='section3__wrapper'>
              <div className="section3__wrapper-webm box--shadow">
                <img src={mng} alt="marketing your business"  className='flexImage box--shadow'/>
              </div>

              <div className=" section3__wrapper-seller ">
              <div className="section-boxInfo">
                <h2 className='section-boxInfo--h2'>Manage everything</h2>
                  <p className='sellerText thirdText'>
                    Gain the insights you need to grow—use a single dashboard to manage orders, shipping, and payments anywhere you go.
                  </p>
                  <a href="#!" class='anc'>Explore how to manage your business <span class='arr'>&rarr;</span></a>
                </div>
                
              </div>
            </div>

            {/*END OF FLEXBOX3 LAYOUT */}

            <div className="section3-emp">
              <p className="section3-emp1">
              Empowering independent business owners everywhere
              </p>
              <p className="section3-emp2">
              Millions of businesses in 175 countries around the world have made over $496 billion USD in sales using Shopify.
              </p>

              <a href="#!" class='anc anc__learn'>Learn more about Shopify <span class='arr'>&rarr;</span></a>
            </div>
          </section>

          <section className="section4">
            <div className="section4-imgContainer">
              <img src={cobe} alt="cobe" className='cobeImg' />
            </div>

            <div className="section4__ceeC">

              <div className="section4__ceeC-chi">
                <img src={chio} alt="chioma" className='chiImg' />
              </div>
              <div className="section4__ceeC-chiText">

                <div className="section4-chiStory">
                  <p className='section4-chiStory-P'>
                    “We’ve been able to build something in 3 years that a lot of brands haven’t actually gotten to in 10 years.”
                  </p>
                  <div className="cee-ImgCont">
                    <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/home/testimonials/logo-cee-cees-closet-small-bbc2baa973603b707c4d17c8ac77b35b9097174340d500cc757354a7d868c456.png' alt="cee webp" className='ceeWebp'/>
                  </div>                  
                  <p className="ceeTagname"> Chioma | Cee Cee’s Closet NYC </p>
                </div>
                <div className="section4__ceeC-btn">
                  <a href='#' className='chiAnc text-nowrap'> <i class="fa-solid fa-play"></i> Play Chioma and Uchenna's story </a>
                </div>
                
              </div>
            </div>
            <ul className='imglogoList'>
              
                <li className='imglogoListItem'><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/cee-cees-closet-small-1d6b515579404482342748f0b67ff6e09836a47b648250d8d1b00e2a24b29faa.png" alt="cee cee logo" className='imgContainer' /></li>
                <li className='imglogoListItem'><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/nalata-nalata-small-b5cd674cc9203997e3a72f2726c8aaa3d594a27c2f69001b4ad833939e9af5ce.png" alt="natale logo" className='imgContainer'/></li>
                <li className='imglogoListItem'><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/kirrin-finch-small-b85f000eede1716da6a496a95ff3836b300b5beaa57617ab834332b675ede0d6.png" alt="kirrin finch logo" className='imgContainer'/></li>
              
                <li className='imglogoListItem'><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/tokyo-bike-small-2295b7e1d183bae07eb36ad83451ec624cfe61bbec39e85877d40600f22115b2.png" alt="tokyomobile" className='imgContainer'/></li>
                <li className='imglogoListItem'><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/meso-goods-small-d5c7243d2e6e1e1677b5648f1e672701476c5df7d516a131013a46c7721c98b4.png" alt="meso" className='imgContainer'/></li>
                <li className='imglogoListItem'><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/coco-and-breezy-small-3cc3c1f7d5c50000624adec29ce71dae453821ce3813f0e34b2d3351b5f2b4b2.png" alt="coco breezy" className='imgContainer'/></li>
              
                <li className='imglogoListItem'><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/brooklyn-museum-small-3cbca35150e701329098cd95f21ec9388886479a5f781a515466b59d80d7b5bb.png" alt="broklyn Museum" className='imgContainer'/></li>
                <li className='imglogoListItem'><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/adore-me-small-b4e6488ccabc61cdaaf92d931a5b8a591a35d55982a796a5b582924a9563afb1.png" alt="Adore me" className='imgContainer'/></li>
              
            </ul>
          </section>
          
          <section className="section5">
            <div className="section5__part1">

            </div>
            <div className="section5__part2">
              
            </div>
          </section>
        </main>
    </>
  )
}

export default Shopify