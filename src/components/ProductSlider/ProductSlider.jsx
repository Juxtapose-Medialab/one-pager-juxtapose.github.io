import React from "react";
import style from './ProductSlider.module.scss';
import SlideShow from './Slideshow'


class ProductSlider extends React.Component {
  render() {
    return (
        <>
            <SlideShow />
            <p className= { style.text }>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
        </>
    )
  }
}

export default ProductSlider;
