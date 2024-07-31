
import image1 from '../assets/slider-main-vemalls.webp'
import image2 from '../assets/vemalls-banner.jpg'

export default function Banner(){
    
return <div className='container-fluid'>
<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..."/>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>




}