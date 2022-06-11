import React from 'react'
import Navbar from '../Navbar/Navbar'
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
              <div className="section__div1-emailForm">               
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

            </div>
          </section>
          
        </main>
    </>
  )
}

export default Shopify