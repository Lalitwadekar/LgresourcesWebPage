import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import './HomePage.scss'
import Offer from './Componants/Offer'
import Header from './Componants/Header'
import Banner from './Componants/Banner'
import Community from './Componants/Community'
import CommonJobs from './Componants/CommonJobs'
import Numbers from './Componants/Numbers'
import HealthSavings from './Componants/HealthSavings'
import ApplyJob from './Componants/ApplyJob'
import Locations from './Componants/Locations'
import Blog from './Componants/Blog'
import Footer from './Componants/Footer'


function App() {
  library.add(fas);
  return (
    <>
     <Offer></Offer>
     <Header></Header>
     <Banner></Banner>
     <Community></Community>
     <CommonJobs></CommonJobs>
     <Numbers></Numbers>
     <HealthSavings></HealthSavings>
     <ApplyJob></ApplyJob>
     <Locations></Locations>
     <Blog></Blog>
     <Footer></Footer>
    </>
  )
}

export default App
