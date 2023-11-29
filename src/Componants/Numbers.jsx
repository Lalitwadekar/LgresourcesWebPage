import React from 'react'
import { Col, Divider, Row } from 'antd';


const Numbers = () => {
  return (
    <div className='Numbers'>
      <div className='Numbers_main px-5 py-20'>

        <h1 className='font-family text-3xl font-bold text-white text-center pb-3'> Our Numbers Speak For Themselves </h1>

        <p className='font-family text-xl text-white text-center pb-14'> We have helped thousands of companies fill their strategic staffing needs and save money <br/> while doing it. </p>

        <Row gutter={[20, 50]} className='commonJobs_main_row px-5 '>

          <Col className="commonJobs_main_row_col-1 gutter-row" span={6}>
            <div className='bg-white p-8 rounded-3xl'>
              <h1 className='font-family text-3xl text-orange-600 font-bold text-center'> 20,000 </h1>
              <p className='font-family text-xl text-black text-center pt-5'> Employees <br /> Placed </p>
            </div>
          </Col>

          <Col className="commonJobs_main_row_col-1 gutter-row" span={6}>
            <div className='bg-white p-8 rounded-3xl'>
              <h1 className='font-family text-3xl text-orange-600 font-bold text-center'> 2,000 </h1>
              <p className='font-family text-xl text-black text-center pt-5'> Local Business Partners <br /> in the Last Decade </p>
            </div>
          </Col>

          <Col className="commonJobs_main_row_col-1 gutter-row" span={6}>
            <div className='bg-white p-8 rounded-3xl'>
              <h1 className='font-family text-3xl text-orange-600 font-bold text-center'> 175 </h1>
              <p className='font-family text-xl text-black text-center pt-5'> Currently Active <br /> Companies </p>
            </div>
          </Col>

          <Col className="commonJobs_main_row_col-1 gutter-row" span={6}>
            <div className='bg-white p-8 rounded-3xl'>
              <h1 className='font-family text-3xl text-orange-600 font-bold text-center'> 250 </h1>
              <p className='font-family text-xl text-black text-center pt-8 pb-4'> Positions Filled </p>
            </div>
          </Col>

        </Row>
      </div>
    </div>
  )
}

export default Numbers
