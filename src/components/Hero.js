import React from 'react'

function Hero(props) {
  return (
    <div className='hero'>
      <div className='hero__wrapper'>
        <video className='hero__img' width="470" height="225" poster={props.content.image} controls></video>
      </div>
    </div>
  )
}

export default Hero