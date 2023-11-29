import React from 'react'

const HealthSavings = () => {
  return (
    <div className='HealthSavings'>
      <div className='flex bg-slate-200 pb-20'>
        <div className='w-1/2'>
            <img className='max-w-lg ml-40 mt-10' src="https://jobs.lgresources.com/hubfs/files_2023/Group-26730.png" alt="" />
        </div>

        <div className='w-1/2'>
            <h1 className='font-family text-black font-extrabold text-4xl py-14'> Health Savings Program </h1>

            <p className='font-family font-light text-lg pr-60'> LG Resources offers employees a health savings program! You can get large discounts on prescription drugs, dental and vision services, diabetic supplies, MRI and CT scans, lab tests, alternative medicine, and more. We also give you telemedicine access.</p>

            <p className='font-family font-light text-lg pr-60 py-10'>This program is not insurance, but it does provide great discounts. The LG Advantage health savings program is open to all part-time and full-time employees, 1099 contractors, and seasonal workers.
            <a className='text-orange-600 hover:underline cursor-pointer'> Get in touch with us </a> to learn more. </p>

            <button className='font-family font-medium bg-orange-600 py-4 px-5 rounded-xl text-white hover:bg-white hover:text-orange-600 border border-orange-600 transition duration-500 shadow-black shadow-sm'> Get in touch </button>
        </div>
      </div>
    </div>
  )
}

export default HealthSavings
