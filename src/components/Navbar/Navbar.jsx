import React from 'react'
import shopify from '../../img/icons8-shopify-48.png'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <main className='main'>   
            <nav className='nav'>
                <div className="nav__div-navbrand text-nowrap">
                    {/* <i class="fa-brands fa-2x fa-shopify"></i> */}
                    <img src={shopify} alt="shopify icon" />
                    <p className="nav__span-brandtext">shopify</p>
                </div>
                <div className="nav__div-main-right navhidden">                    
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Start
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Start your business</a></li>
                            <hr className="dropdown__hr"/>
                            <li><a class="dropdown-item" href="#">Branding</a></li>
                            <li><a class="dropdown-item" href="#">Online presence</a></li>
                            <li><a href="#" className="dropdown-item">Store set up</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Sell
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Sell everywhere</a></li>
                            <hr className="dropdown__hr" />
                            <li><a class="dropdown-item" href="#">Online store</a></li>
                            <li><a class="dropdown-item" href="#">Point of Sale</a></li>
                            <li><a href="#" className="dropdown-item">Buy Button</a></li>
                            <li><a href="#" className="dropdown-item">Checkout</a></li>
                            <li><a href="#" className="dropdown-item">Sales channels</a></li>
                            <li><a href="#" className="dropdown-item">Custom storefront tools</a></li>
                            <li><a href="#" className="dropdown-item">International commerce</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Market
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Market your business</a></li>
                            <hr className="dropdown__hr" />
                            <li><a class="dropdown-item" href="#">Email marketing</a></li>
                            <li><a class="dropdown-item" href="#">Marketing automation</a></li>
                            <li><a href="#" className="dropdown-item">Customer groups</a></li>
                            <li><a href="#" className="dropdown-item">Business chats</a></li>
                            <li><a href="#" className="dropdown-item">Facebook ads</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Manage
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Manage everything</a></li>
                            <hr className="dropdown__hr" />
                            <li><a class="dropdown-item" href="#">Ecommerce automation</a></li>
                        </ul>
                    </div>
                </div>
                <div className="nav__div-main-left navhidden">
                <span className="nav__div-leftText text-nowrap " >Pricing</span>
                    <div class="dropdown ">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Learn
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Help Center</a></li>
                            <li><a class="dropdown-item" href="#">Blog</a></li>
                            <li><a class="dropdown-item" href="#">Business Courses</a></li>
                            <li><a class="dropdown-item" href="#">Guides</a></li>
                            <li><a class="dropdown-item" href="#">Shopify Community</a></li>
                            <li><a class="dropdown-item" href="#">Free Tools</a></li>
                            <li><a class="dropdown-item" href="#">Podcasts</a></li>
                            <li><a class="dropdown-item" href="#">Business encyclopedia</a></li>
                            <li><a class="dropdown-item" href="#">Community Events</a></li>
                            <li><a class="dropdown-item" href="#">Research</a></li>
                        </ul>
                    </div>
                    <span className="nav__div-leftText text-nowrap " >Log in</span>
                    <span className="nav__div-leftText text-nowrap textBox" >Start free trial</span>
                </div>       
                <div className="nav__div-toggle">
                    <div className="nav__div-toggle-Text">
                        <span className="nav__span-leftText text-nowrap " id='navvisible'>Start free trial</span>
                    </div>
                    <div className='nav__div-toggle-Box'>
                        <div className="nav__div-toggle-Line"></div>
                        <div className="nav__div-toggle-Line"></div>
                        <div className="nav__div-toggle-Line"></div>
                    </div>
                    
                    </div>            
                
            </nav>
        </main>
    </>
  )
}

export default Navbar