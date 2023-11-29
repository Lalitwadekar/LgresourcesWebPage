import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Offer = () => {
  return (
    <div className='Offer'>
      <div className='Offer_container flex flex-col sm:flex-col md:flex-col lg:flex-row'>
        <div className='Offer_container_box-1'>
            <p className='Offer_container_box-1-text'> LG Resources offers Customized Staffing - 
              <a className='Offer_container_box-1-text-link' href=""> Get Started Now </a> 
            </p>           
        </div>

        <div className='Offer_container_box-2 mr-0 sm:mr-4'>
            <a className='Offer_container_box-2-link-1' href=""> Privacy Policy </a>
            <a className='Offer_container_box-2-link-2' href=""> Contact </a>
            <div className='Offer_container_box-2-img'>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#FFF", fontSize:"rem"}}/>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Offer
