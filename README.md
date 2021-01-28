# React Simple Adaptive Carousel

Simple, responsive and customizable carousel component for your React app.

## Install

```
$ npm install --save react-carousel-simple-adaptive
```

## Features

- Work for mobile and desktop devices
- Support swipes
- Work for any HTML content
- Animated
- Finger-following swipes
- Supports multiple carousels on the screen
- Supports infinite option
- Supports scrolling to a selected slide
- Customizable (with css classes and component props)

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import CarouselSimple from 'react-carousel-simple-adaptive';

function CarouselSimpleExample() {
  return (
    <CarouselSimple maxWidth="100%" height={400} infinite disableScrollbar>
      <div>hello</div>
      <div>world</div>
    </CarouselSimple>
  );
}

ReactDOM.render(
  <CarouselSimpleExample />,
  document.getElementById('carousel-simple-example'),
);
```

## CarouselSimple API

`<CarouselSimple>` takes a limited subset of options:

```js
{
  maxWidth: number | string,
  height: number | string,
  infinite: boolean,
  disableScrollbar: boolean
}
```

## Demo

<https://andreygordeev1234.github.io/react-carousel-simple-adaptive/>
