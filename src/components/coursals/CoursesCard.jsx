import Slider from "react-slick";
import * as Icons from 'react-bootstrap-icons'
import { Component } from "react";
import Desktop from '../../asset/image/Desktop.png'

export default class CoursesCard extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      swipeToSlide: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55;`
        );
      }
      
    };
    return (
      <div className="p-2">
        <Slider {...settings}>
        <div className="p-2 d-flex justify-content-center my-1">   
        <div class="card shadow border-0 p-1" style={{width:"26rem"}}>
  <img src={Desktop} class="card-img-top p-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ">HTML, CSS, and JavaScript</h5>
    <p class="card-text"><span>Web Programming (HTML, CSS, JavaScript)</span></p>
    <p><strong><Icons.Motherboard/> Course Duration:</strong>  6 Months</p>
    <p><strong><Icons.GeoAlt/> Location:</strong>  Mulchera Gadchiroli</p>
    <p><strong><Icons.Mortarboard/> Certification:</strong>  NASSCOM Futureskill Prime</p>

    <a href="https://www.google.com" class="btn btn-primary w-100">Learn More About Course </a>
  </div>
</div>
</div>

<div className="p-2 d-flex justify-content-center my-1">   
<div class="card shadow border-0 p-1" style={{width:"26rem"}}>
  <img src={Desktop} class="card-img-top p-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Full-Stack Development</h5>
    <p class="card-text"><span>Web Programming (HTML, CSS, JavaScript)</span></p>
    <p><strong><Icons.Motherboard/> Course Duration:</strong>  6 Months</p>
    <p><strong><Icons.GeoAlt/> Location:</strong>  Mulchera Gadchiroli</p>
    <p><strong><Icons.Mortarboard/> Certification:</strong>  NASSCOM Futureskill Prime</p>    <a href="https://www.google.com" class="btn btn-primary w-100">Learn More About Course </a>
  </div>
</div>
</div>

<div className="p-2 d-flex justify-content-center my-1">  
<div class="card shadow border-0 p-1" style={{width:"26rem"}}>
  <img src={Desktop} class="card-img-top p-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Front-End Development</h5>
    <p class="card-text"><span>Web Programming (HTML, CSS, JavaScript)</span></p>
    <p><strong><Icons.Motherboard/> Course Duration:</strong>  6 Months</p>
    <p><strong><Icons.GeoAlt/> Location:</strong>  Mulchera Gadchiroli</p>
    <p><strong><Icons.Mortarboard/> Certification:</strong>  NASSCOM Futureskill Prime</p>    <a href="https://www.google.com" class="btn btn-primary w-100">Learn More About Course </a>
  </div>
</div>
</div>



<div className="p-2 d-flex justify-content-center my-1">   
<div class="card shadow border-0 p-1" style={{width:"26rem"}}>
  <img src={Desktop} class="card-img-top p-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Node.js and Express</h5>
    <p class="card-text"><span>Web Programming (HTML, CSS, JavaScript)</span></p>
    <p><strong><Icons.Motherboard/> Course Duration:</strong>  6 Months</p>
    <p><strong><Icons.GeoAlt/> Location:</strong>  Mulchera Gadchiroli</p>
    <p><strong><Icons.Mortarboard/> Certification:</strong>  NASSCOM Futureskill Prime</p>    <a href="https://www.google.com" class="btn btn-primary w-100">Learn More About Course </a>
  </div>
</div>
</div>

<div className="p-2 d-flex justify-content-center my-1">   
        <div class="card shadow border-0 p-1" style={{width:"26rem"}}>
  <img src={Desktop} class="card-img-top p-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ">HTML, CSS, and JavaScript</h5>
    <p class="card-text"><span>Web Programming (HTML, CSS, JavaScript)</span></p>
    <p><strong><Icons.Motherboard/> Course Duration:</strong>  6 Months</p>
    <p><strong><Icons.GeoAlt/> Location:</strong>  Mulchera Gadchiroli</p>
    <p><strong><Icons.Mortarboard/> Certification:</strong>  NASSCOM Futureskill Prime</p>    <a href="https://www.google.com" class="btn btn-primary w-100">Learn More About Course </a>
  </div>
</div>
</div>

<div className="p-2 d-flex justify-content-center my-1">   
<div class="card shadow border-0 p-1" style={{width:"26rem"}}>
  <img src={Desktop} class="card-img-top p-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Full-Stack Development</h5>
    <p class="card-text"><span>Web Programming (HTML, CSS, JavaScript)</span></p>
    <p><strong><Icons.Motherboard/> Course Duration:</strong>  6 Months</p>
    <p><strong><Icons.GeoAlt/> Location:</strong>  Mulchera Gadchiroli</p>
    <p><strong><Icons.Mortarboard/> Certification:</strong>  NASSCOM Futureskill Prime</p>    <a href="https://www.google.com" class="btn btn-primary w-100">Learn More About Course </a>
  </div>
</div>
</div>

<div className="p-2 d-flex justify-content-center my-1">  
<div class="card shadow border-0 p-1" style={{width:"26rem"}}>
  <img src={Desktop} class="card-img-top p-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Front-End Development</h5>
    <p class="card-text"><span>Web Programming (HTML, CSS, JavaScript)</span></p>
    <p><strong><Icons.Motherboard/> Course Duration:</strong>  6 Months</p>
    <p><strong><Icons.GeoAlt/> Location:</strong>  Mulchera Gadchiroli</p>
    <p><strong><Icons.Mortarboard/> Certification:</strong>  NASSCOM Futureskill Prime</p>    <a href="https://www.google.com" class="btn btn-primary w-100">Learn More About Course </a>
  </div>
</div>
</div>



<div className="p-2 d-flex justify-content-center my-1">   
<div class="card shadow border-0 p-1" style={{width:"26rem"}}>
  <img src={Desktop} class="card-img-top p-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Node.js and Express</h5>
    <p class="card-text"><span>Web Programming (HTML, CSS, JavaScript)</span></p>
    <p><strong><Icons.Motherboard/> Course Duration:</strong>  6 Months</p>
    <p><strong><Icons.GeoAlt/> Location:</strong>  Mulchera Gadchiroli</p>
    <p><strong><Icons.Mortarboard/> Certification:</strong>  NASSCOM Futureskill Prime</p>    <a href="https://www.google.com" class="btn btn-primary w-100">Learn More About Course </a>
  </div>
</div>
</div>

        </Slider>
      </div>
    );
  }
}