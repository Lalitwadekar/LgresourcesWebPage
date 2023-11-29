import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
  return (
    <div className='Header sticky top-0 z-50'>
      <div className='Header_container'>
        <div className='Header_container_logoBox'>
            <img className='Header_container_logoBox_img' src="https://jobs.lgresources.com/hubfs/logo.svg" alt="LG Resources" />
        </div>

        <div className='Header_container_linkBox'>
            <a className='Header_container_linkBox_link-1' href=""> Work for LG </a>
            <div className='Header_container_linkBox_link-2'>
                <a className='' href=""> Jobs </a>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                {/* <FontAwesomeIcon icon="fa-solid fa-chevron-up" rotation={180} /> */}
            </div>
            <div className='Header_container_linkBox_link-3'>
                <a href=""> Locations </a>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
            <a className='Header_container_linkBox_link-4' href=""> Blog </a>
        </div>
        
        <button className='Header_container_btn'> Apply for a job </button>
      </div>
    </div>
  )
}

export default Header
