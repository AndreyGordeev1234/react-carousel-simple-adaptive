import React, { useRef, useState } from 'react';
import { Slide } from './Slide.js';
import { useResize } from './useResize.js';
import { useFingerSwipe } from './useFingerSwipe';
import './CarouselSimple.css';

const CarouselSimple = React.memo(
  ({
    children,
    maxWidth = 700,
    height = 300,
    infinite = false,
    disableScrollbar = false,
  }) => {
    const [curr, setCurr] = useState(0);
    const slideCount = infinite ? Infinity : children.length;
    const sliderRef = useRef(null);
    const { width: slideWidth } = useResize(sliderRef, maxWidth);

    const isPrevDisabled = () => {
      if (infinite) return false;
      return curr <= 0;
    };

    const isNextDisabled = () => {
      if (infinite) return false;
      return curr >= slideCount - 1;
    };

    const handleNext = () => {
      if (infinite) {
        setCurr((curr + 1) % children.length);
      } else {
        setCurr((curr) => {
          if (curr < slideCount - 1) return curr + 1;
          else return curr;
        });
      }
    };

    const hanldePrev = () => {
      if (infinite) {
        setCurr((curr) => (curr <= 0 ? children.length - 1 : curr - 1));
      } else {
        setCurr((curr) => {
          if (curr > 0) return curr - 1;
          else return curr;
        });
      }
    };

    const setCurrSlide = (num) => {
      setCurr(num);
    };

    const {
      translate,
      handleTouchStart,
      handleTouchEnd,
      handleTouchMove,
    } = useFingerSwipe(slideWidth, handleNext, hanldePrev);

    maxWidth = isNaN(maxWidth) ? maxWidth : `${maxWidth}px`;
    height = isNaN(height) ? height : `${height}px`;

    return (
      <div
        className="carousel-simple-adaptive-slider"
        style={{
          maxWidth: maxWidth,
          height: height,
        }}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        {children.map((child, i) => {
          return (
            <Slide
              key={i}
              curr={curr}
              width={slideWidth}
              height={height}
              translate={translate}
              slideCount={slideCount}
            >
              {child}
            </Slide>
          );
        })}
        <button
          className="carousel-simple-adaptive-slider-btn-prev"
          onClick={hanldePrev}
          disabled={isPrevDisabled()}
        ></button>
        <button
          className="carousel-simple-adaptive-slider-btn-next"
          onClick={handleNext}
          disabled={isNextDisabled()}
        ></button>

        {!disableScrollbar && (
          <div className="carousel-simple-adaptive-slider-set-slide-wrapper">
            {children.map((_, i) => {
              let className = 'carousel-simple-adaptive-slider-btn-set-slide';
              if (curr === i)
                className +=
                  ' carousel-simple-adaptive-slider-btn-set-slide-active';
              return (
                <button
                  className={className}
                  key={i}
                  onClick={() => setCurrSlide(i)}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

export default CarouselSimple;
