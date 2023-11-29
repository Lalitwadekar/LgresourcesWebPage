import React from 'react'
import SlickSlider from './SlickSlider'

const Banner = () => {
  return (
    <div className='Banner_main'>
      <div className='Banner_main_container'>
        <div className='Banner_main_container_heading'>
          <h1> Looking For a New <br/> Career <br/> Opportunity? We <br/> Can Help. </h1>
        </div>

        <div className='Banner_main_container_img'></div>

        <div className='Banner_main_container_slider'>
          <SlickSlider></SlickSlider>
        </div>
      </div>
    </div>
  )
}

export default Banner
