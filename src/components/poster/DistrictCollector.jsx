import React from 'react'
import DistrictCollectorGad from '../../asset/image/DistrictCollector.png'

function DistrictCollector () {
  return (
    <div className='district-container border border-danger row w-100  m-0 p-0 p-2'>
   <div className='col-lg-6 col-sm-12 col-md-6 border border-danger d-flex justify-content-center '>
    <img src={DistrictCollectorGad} className='border border-success img img-fluid '  alt="District Collector Gadchiroli"/>
   </div>

    <div className='col-lg-6 col-sm-12 col-md-6 border border-danger d-flex align-content-center'>
        <div className='border border-primary '>
            
        <h1 className='display-2'>Mr. Sanjay Meena</h1>
        <h4>District Collector & Magistrate Gadchiroli</h4>
        <p>"Alpha Acasemy is an effort of district administration toprovide expousure of digital education to students of Gadchiroli and acquire for themselves with 21st century digital skill set, opening multiple career oppotunities."</p>
        </div>

    </div>


    </div>
  )
}

export default DistrictCollector;