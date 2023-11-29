import React from 'react'
import { Col, Divider, Row } from 'antd';
// import '../HomePage.scss'

const CommonJobs = () => {
  const style = {
    
  };
  return (

    <div className='commonJobs'>
      <div className='commonJobs_main bg-gray-100'>
        <h1 className='commonJobs_heading font-family font-bold text-black text-3xl text-center py-10' 
        > COMMON JOBS </h1>

        <Row gutter={[50, 50]} className='commonJobs_main_row px-10'>

          <Col className="commonJobs_main_row_col-1 gutter-row" span={8}>
            <div className='bg-white pt-10 pb-44 px-10 rounded-3xl'>
              <div className=''>
                <img className=' ' src="./src/assets/icon-Light_Industrial.svg" alt="" />
              </div>
              <h1 className='font-family font-bold text-black-500 text-xl py-5'> LIGHT INDUSTRIAL JOBS </h1>
              <p className='text-black-500 text-base font-normal'> LG Resources can help you find a light industrial job that matches your skills and experience level. We hire for a wide range of employers throughout the lower 48 states. </p>
            </div>
          </Col>

          <Col className="commonJobs_main_row_col-2 gutter-row" span={8}>
            <div className='carry bg-white pt-12 pb-48 px-10 rounded-3xl'>
              <div>
                <img src="./src/assets/icon-General_Labor.svg" alt="" />
              </div>
              <h1 className='font-family font-bold text-black-500 text-xl py-5'> GENERAL LABOR JOBS </h1>
              <p className='text-black-500 text-base font-normal'> Looking for a job in warehousing, manufacturing, maintenance, or general labor? We have a wide range of jobs posted daily to our job board. </p>
            </div>
          </Col>

          <Col className="commonJobs_main_row_col-3 gutter-row" span={8}>
            <div className='carry bg-white pt-10 pb-44 px-10 rounded-3xl'>
              <div>
                <img src="./src/assets/icon-Skilled_Labor.svg" alt="" />
              </div>
              <h1 className='font-family font-bold text-black-500 text-xl py-5'> SKILLED LABOR JOBS </h1>
              <p className='text-black-500 text-base font-normal'> Your skills and certifications are in demand at LG Resources. We are always hiring welders, CDL truck drivers, HVAC technicians, electricians, and other skilled people for technical and industrial roles. </p>
            </div>
          </Col>

          <Col className="commonJobs_main_row_col-4 gutter-row" span={8}>
            <div className='carry bg-white pt-12 pb-52 px-10 rounded-3xl'>
              <div>
                <img src="./src/assets/icon-Clerical_Staffing.svg" alt="" />
              </div>
              <h1 className='font-family font-bold text-black-500 text-xl py-5'> CLERICAL JOBS </h1>
              <p className='text-black-500 text-base font-normal'> LG Resources can help you find a great office job. We frequently hire for clerical positions throughout the lower 48 states. </p>
            </div>
          </Col>

          <Col className="commonJobs_main_row_col-5 gutter-row" span={8}>
            <div className='carry bg-white pt-10 pb-36 px-10 rounded-3xl'>
              <div>
                <img src="./src/assets/icon-Professional_Staffing.svg" alt="" />
              </div>
              <h1 className='font-family font-bold text-black-500 text-xl py-5'> PROFESSIONAL JOBS </h1>
              <p className='text-black-500 text-base font-normal'> Our professional staffing division recruits people for executive, technical, and professional roles all over the country. We can help you find a job that matches your expertise in IT, healthcare, accounting, engineering, or another industry. </p>
            </div>
          </Col>

          <Col className="commonJobs_main_row_col-6 gutter-row" span={8}>
            <div className='carry bg-white pt-10 pb-36 px-10 rounded-3xl'>
              <div>
                <img src="./src/assets/icon-Customized_Staffing.svg" alt="" />
              </div>
              <h1 className='font-family font-bold text-black-500 text-xl py-5'> OTHER JOBS </h1>
              <p className='text-black-500 text-base font-normal'> Don’t see the type of job you want listed above? LG Resources hires for many specialized roles in just about every industry. Check out our job board today to see if we have something that fits your skills. </p>
            </div>
          </Col>

        </Row>
        <div className='flex justify-center py-16'>
          <button className='font-family bg-orange-600 py-4 px-5 rounded-xl text-white hover:bg-white hover:text-orange-600 border border-orange-600 transition duration-500'> Explore All Job Openings </button>
        </div>
      </div>
    </div>

  )
}

export default CommonJobs
