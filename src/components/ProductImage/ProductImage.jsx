import React from "react";
import productimage from './product-image.jpg'; // Tell webpack this JS file uses this image

import style from './ProductImage.module.scss';

class ProductImage extends React.Component {
  render() {
    return (
        <>
            <img src={productimage} className={ style.productimage } alt="productimage" />
            <div className= { style.background }></div>
        </>
    )
  }
}

export default ProductImage;
