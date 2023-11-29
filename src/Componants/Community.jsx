import React from 'react'
// import { Col, Row } from 'antd';
import '../HomePage.scss'

const Community = () => {
  return (
    <div className='Community'>
        <div className='Community_main flex p-10'>
            <div className='Community_main_container-1 w-3/5'>
                <img className='' src="https://jobs.lgresources.com/hubfs/files_2023/Group-16767.jpg" alt="lgresources" />
            </div>

            <div className='Community_main_container-2 w-2/5 flex flex-col pl-20 gap-12'>
                <h1 className='text-5xl font-bold font-mono'> Come Join Our <br/> Community </h1>
                <p className='text-xl font-normal font-sans'> At LG Resources, we believe jobs can change lives. We have helped thousands of job seekers across the U.S. find temporary and long-term employment in jobs they love. Whether you are an industry veteran or seeking your first job, LG is here to help you find work that matches your skills. </p>
                <button className='text-white text-xl px-4 py-4 bg-orange-600 font-sans rounded-2xl mt-28'> Apply with LG </button>
            </div>
        </div>
    </div>
  )
}

export default Community
