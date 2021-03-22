import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ProductIntroSection.module.scss';
import scheveningenImage1 from '../../static/images/druktescheveningen.jpeg';
import mockup from '../../static/images/mockup.png';
import mockbeach from '../../static/images/mockonbeach.png';

class ProductIntroSection extends React.Component {
  render() {
    return (
      <>
        <h2 className={ styles.productTitle }>Product</h2>
        <Row>
          <Col className={ styles.col } xs={ 6 }>
            <p className={ styles.productText }>Het concept bestaat uit digitale borden, met een camera/sensor, die verspreid staan door Scheveningen en Den Haag. Op deze borden is te zien hoe druk het is op het strand, zodat mensen de drukke plekken vermijden en opzoek kunnen gaan naar de minder drukke plekken. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam velit et mi faucibus blandit. Cras bibendum, justo elementum pellentesque posuere, quam purus molestie urna, accumsan dapibus ex enim at nisi. Maecenas at tincidunt est. Mauris dignissim ex nunc, rhoncus blandit massa tempor ut. Etiam suscipit turpis quis ante gravida egestas.  </p>
          </Col>
          <Col xs={ 6 }>
            <div className={ styles.productImageWrapper }>
              <img src={ scheveningenImage1 } className={ styles.productImage } />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={ styles.col } xs={ 6 }>
            <div className={ styles.productImageWrapper2 }>
              <img src={ mockup } className={ styles.productImage2 } />
            </div>
          </Col>
          <Col className={ styles.col2 } xs={ 6 }>
            <p className={ styles.productText2 }>Het concept bestaat uit digitale borden, met een camera/sensor, die verspreid staan door Scheveningen en Den Haag. Op deze borden is te zien hoe druk het is op het strand, zodat mensen de drukke plekken vermijden en opzoek kunnen gaan naar de minder drukke plekken. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam velit et mi faucibus blandit. Cras bibendum, justo elementum pellentesque posuere, quam purus molestie urna, accumsan dapibus ex enim at nisi. Maecenas at tincidunt est. Mauris dignissim ex nunc, rhoncus blandit massa tempor ut. Etiam suscipit turpis quis ante gravida egestas.  </p>
          </Col>
        </Row>
        <Row>
          <Col className={ styles.col } xs={ 6 }>
            <p className={ styles.productText }>Het concept bestaat uit digitale borden, met een camera/sensor, die verspreid staan door Scheveningen en Den Haag. Op deze borden is te zien hoe druk het is op het strand, zodat mensen de drukke plekken vermijden en opzoek kunnen gaan naar de minder drukke plekken. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam velit et mi faucibus blandit. Cras bibendum, justo elementum pellentesque posuere, quam purus molestie urna, accumsan dapibus ex enim at nisi. Maecenas at tincidunt est. Mauris dignissim ex nunc, rhoncus blandit massa tempor ut. Etiam suscipit turpis quis ante gravida egestas.  </p>
          </Col>
          <Col xs={ 6 }>
            <div className={ styles.productImageWrapper }>
              <img src={ mockbeach } className={ styles.productImage } />
            </div>
          </Col>
        </Row>
        </>
    )
  }
}

export default ProductIntroSection;
