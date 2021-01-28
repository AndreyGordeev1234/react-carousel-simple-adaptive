import { useCallback, useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';

export const useFingerSwipe = (width, onLeft, onRight) => {
  const [translate, setTranslate] = useState(0);

  const xDown = useRef();
  const yDown = useRef();
  const xDiff = useRef();
  const yDiff = useRef();
  const currWidth = useRef(width);

  const handleTouchStart = (event) => {
    if (getEventName(event) === 'touchstart') {
      xDown.current = event.touches[0].clientX;
      yDown.current = event.touches[0].clientY;
    } else {
      xDown.current = event.clientX;
      yDown.current = event.clientY;
    }
  };

  const getEventName = (event) => {
    return event.type;
  };

  const handleMove = (event) => {
    if (!xDown.current || !yDown.current) return;

    let xMove, yMove;
    if (getEventName(event) === 'touchmove') {
      xMove = event.touches[0].clientX;
      yMove = event.touches[0].clientY;
    } else {
      xMove = event.clientX;
      yMove = event.clientY;
    }

    xDiff.current = xDown.current - xMove;
    yDiff.current = yDown.current - yMove;

    const width = currWidth.current;

    if (Math.abs(xDiff.current) > 30) {
      let translateX = xDiff.current;
      translateX =
        translateX >= width
          ? width
          : translateX <= -width
          ? -width
          : translateX;
      setTranslate(-translateX);
    }

    xDiff.current = 0;
    yDiff.current = 0;
  };

  const handleTouchEnd = () => {
    setTranslate((translate) => {
      if (translate >= width / 2) {
        onRight();
      } else if (translate <= -width / 2) {
        onLeft();
      }
      return 0;
    });

    xDown.current = null;
    yDown.current = null;
  };

  const handleTouchMove = useCallback(throttle(handleMove, 200), []);

  useEffect(() => {
    currWidth.current = width;
  }, [width]);

  return { translate, handleTouchStart, handleTouchMove, handleTouchEnd };
};
