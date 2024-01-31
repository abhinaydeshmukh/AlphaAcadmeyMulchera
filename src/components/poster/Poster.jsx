import React from 'react';
import './poster.css';
import AlphaLogo from '../../asset/logo/alphaAcadmey.png'
import MahaSeal from '../../asset/logo/maharashtra-seal.png'
import PosterMain from '../../asset/image/posterMain.jpeg'

// Poster component representing a poster for Alpha Academy
function Poster() {
  return (
    <div className='main-poster container-fluid w-100 border border-danger m-0 p-2 position-relative'>
      <div className='main-poster-container border border-danger m-0 p-2 d-flex justify-content-around justify-content-center'>
        <p className='d-none d-md-block'><img src={MahaSeal} alt="Maha Seal" height="100px" width="100px"/></p>
        <h3>
          Welcome to Alpha Academy<br />
          <h1 className='border text-center'>Block Name</h1>
        </h3>
        <p className='d-none d-md-block'><img src={AlphaLogo} alt="Alpha Logo" height="100px" width="130px"/></p>
      </div>

      <div className='poster-information border border-primary p-2'>
        <img src={PosterMain} alt="Main Poster Image" className='img img-fluid w-100' />
        <div className='border border-danger'>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </p>
          <div className='border d-flex justify-content-center p-2'>
          <button className='text-center border-0 border-secondary p-2' type="button">
            Learn More
          </button>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default Poster;
