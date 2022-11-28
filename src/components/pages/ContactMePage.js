import React from 'react'
import './ContactMePage.css'

function ContactMePage() {

  function sendEmail(e) {
    e.preventDefault();

    console.log("Email sent!")
  }

  return (
    <div className='centeredPage contactMePage'>
      <div className='contactMeContainers'>
        <h1><span className='spanPink'>If you want to contact me, you can do so by sending me an email: </span>
        lucianofrias1 @hotmail.com</h1>

        <div className='contactMeInputsContainer'>
          <form onSubmit={sendEmail}>
          <label for='name'>Your name: </label>
          <input type='text' placeholder='Enter your name...' name='name' required  maxlength='16'/>

          <label for='email'>Your email:</label>
          <input type='email' placeholder='Enter your email...' name='email' required />

          <label for='subject'>Your subject: </label>
          <input type='text' placeholder='Enter your subject...' name='subject' required  maxlength='50'/>

          <label for='message'>Your message: </label>
          <textarea type='text' placeholder='Enter your message...' name='message' required></textarea>

          <button type='submit'>Send!</button>
          </form>
        </div>
        <h1><span className='spanBlue'>Thank you for visiting my personal website! ;)</span></h1>
        </div>
    </div>
    
  )
}

export default ContactMePage