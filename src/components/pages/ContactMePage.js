import React from 'react'
import './ContactMePage.css'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

function ContactMePage() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs.sendForm('gmail_portfolio', 'template_dhi2chj', form.current, 'K0NaO_2Q6t544G3vI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      alert("Mail enviado!");
  };

  return (
    <div className='centeredPage contactMePage'>

      <h1 className='title'>Contact Me</h1>
      <div className='contactMeContainers'>
        

        <div className='contactMeInputsContainer'>
          <form ref={form} onSubmit={sendEmail}>
          <label for='name'>Your name: </label>
          <input type='text' placeholder='Enter your name...' name='name' required  maxlength='16' autoComplete='off'/>

          <label for='email'>Your email:</label>
          <input type='email' placeholder='Enter your email...' name='email' required autoComplete='off'/>

          <label for='subject'>Your subject: </label>
          <input type='text' placeholder='Enter your subject...' name='subject' required  maxlength='50' autoComplete='off'/>

          <label for='message'>Your message: </label>
          <textarea type='text' placeholder='Enter your message...' name='message' required autoComplete='off'></textarea>

          <button type='submit'>Send!</button>

          <h1><span className='spanBlue'>Thank you for visiting my personal website! ;)</span></h1>
          </form>
        </div>

        </div>
    </div>
    
  )
}

export default ContactMePage