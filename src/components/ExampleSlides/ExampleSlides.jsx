import React from 'react';
import CarouselSimple from '../CarouselSimple';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import './ExampleSlides.css';

export const ExampleSlides = () => {
  return (
    <div>
      <h1>React Simple Adaptive Carousel</h1>
      <hr />
      <p>
        Simple, responsive and customizable carousel component for your React
        app.
      </p>
      <h2>Installing</h2>
      <hr />
      <br />
      <code>npm install --save react-carousel-simple-adaptive</code>
      <h2>Demo</h2>
      <hr />
      <h3>Carousel</h3>
      <br />
      <CarouselSimple maxWidth="100%" height="auto">
        <div className="card">
          <img src={image1} alt="1" className="card__image" />
          <div className="card__main">
            <h1 className="title">Title 1</h1>
            <p className="description">Some long description 1...</p>
          </div>
        </div>

        <div className="card">
          <img src={image2} alt="2" className="card__image" />
          <div className="card__main">
            <h1 className="title">Title 2</h1>
            <p className="description">Some long description 2...</p>
          </div>
        </div>

        <div className="card">
          <img src={image3} alt="3" className="card__image" />
          <div className="card__main">
            <h1 className="title">Title 3</h1>
            <p className="description">Some long description 3...</p>
          </div>
        </div>

        <div className="card">
          <img src={image4} alt="4" className="card__image" />
          <div className="card__main-4">
            <h1 className="title">Title 4</h1>
            <p className="description">Some long description 4...</p>
          </div>
        </div>
      </CarouselSimple>
    </div>
  );
};
