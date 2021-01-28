import React from 'react';
import './CarouselSimple.css';

export const Slide = React.memo(
  ({
    children,
    curr,
    width,
    height,
    translate,
    transitionDuration = 0.4,
    slideCount,
  }) => {
    let actualTranslate = curr * -width + translate;
    if (actualTranslate > 0) actualTranslate = 0;
    else if (actualTranslate <= (slideCount - 1) * -width)
      actualTranslate = curr * -width;

    return (
      <div
        className="carousel-simple-adaptive-slider-slide"
        style={{
          flex: `0 0 ${width}px`,
          maxWidth: `${width}px`,
          maxHeight: `${height}px`,
          transform: `translateX(${actualTranslate}px)`,
          transition: `transform ${transitionDuration}s ease`,
        }}
      >
        {children}
      </div>
    );
  },
);
