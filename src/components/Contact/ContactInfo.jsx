import React from 'react'
import './ContactInfo.css'

function ContactInfo({iconUrl, text}) {
  return (
    <div className='contact-details'>
        <div className='icon'>
            <img src={iconUrl} alt="{text}" />

        </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfo
