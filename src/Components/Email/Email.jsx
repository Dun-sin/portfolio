import React from 'react';
import './Email.css';
import ButtonMailto from './ButtonMailto'

const Email = () => {
  return (
    <div className="email">
      <h1>Send me an Email</h1>
      <ButtonMailto label="Let's Talk" mailto="mailto:faiyetolef@gmail.com" />
    </div>
  )
}

export default Email
