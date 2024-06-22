import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='contact-form'>
        <form action="">
            <div className='name-container'>
            <input type="text" name='firstname' placeholder='Enter Your First Name' />
            <input type="text" name='lastname' placeholder='Enter Your Last Name' />
            </div>
            <input type="email" name='email' placeholder='Enter Your Email' />
            <textarea type="text" name="message" id="" placeholder='Message' rows={3} />
            <button>Send</button>
        </form>
      
    </div>
  )
}

export default Form
