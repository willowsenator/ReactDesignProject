import React from 'react';
import data from '../resources/data.json'
export function Carousel(){
    return (<div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      {
        data.carousel.map((item, index) => {
            const divActive = index === 0 ? 'carousel-item active' : 'carousel-item';
            return (
                <div key={index} className={divActive}>
                    <img src={item.url} className='d-block w-100' alt={item.alt}/>
                    <div className='carousel-caption d-none d-md-block'>
                        <h5>{item.text}</h5>
                        <p>{item.description}</p>
                    </div>
                </div>
            );
        })
      }
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>);
}