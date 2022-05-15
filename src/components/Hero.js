import React from 'react'
import play from '../Assets/Icons/play.svg'
import fullscreen from '../Assets/Icons/fullscreen.svg'
import volume_up from '../Assets/Icons/volume_up.svg'

function Hero(props) {
  return (
    <div className='hero'>
      <div className='hero__wrapper'>
        <video className='hero__image' width="470" height="225" poster={props.content.image} ></video>
      </div>

      <div className="hero__icon-container">
        <div className="hero__icon-container--play">
        <img className="hero__icon-container--play-icon"src={play} alt="icon" />
        </div>

        <div className='hero__icon-container--scrubber'>
        <hr className='hero__icon-container--srubber-icon'></hr>
        <p className='hero__icon-container--scrubber-text'>
          {props.content.duration}
        </p>
        </div>

        <div className='hero__icon-container--fullscreen'>
          <img className='hero__icon-container--fullscreen-icon' src={fullscreen} alt='fullscreen icon' />
          <img className='hero__icon-container--fullscreen-icon' src={volume_up} alt='volume icon'/>
        </div>
      </div>

    </div>
  )
}

export default Hero