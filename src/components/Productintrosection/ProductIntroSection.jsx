import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ProductIntroSection.module.scss';
import scheveningenImage1 from '../../static/images/druktescheveningen.jpeg';
import mockup from '../../static/images/mockup.png';
import mockbeach from '../../static/images/mockonbeach.png';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

class ProductIntroSection extends React.Component {
  render() {
    return (
      <section className={ cn('productIntroSection') } id="product">
        <Container fluid>
          <h2 className={ styles.productTitle }>Product</h2>
          <Row className={ styles.row }>
            <Col className={ cn('col') } xs={ 6 }>
              <p className={ styles.productText }> Het concept bestaat uit digitale borden, met een camera/sensor, die verspreid staan door Scheveningen en Den Haag. Op deze borden is te zien hoe druk het is op het strand, zodat mensen de drukke plekken kunnen vermijden en op zoek kunnen gaan naar de minder drukke plekken.  </p>
            </Col>
            <Col className={ cn('col', 'productImageCol2') } xs={ 6 }>
              <div className={ styles.squareBehind }></div>
                <div className={ cn('productImageWrapper', 'productImageWrapper1')}>
                  <img src={ scheveningenImage1 } className={ styles.productImage } />
                </div>
            </Col>
          </Row>
          <Row className={ styles.row }>
            <Col className={ styles.col } xs={ 6 }>
              <div className={ cn('productImageWrapper', 'productImageWrapper2') }>
                <img src={ mockup } className={ styles.productImage2 } />
              </div>
            </Col>
            <Col className={ cn('col', 'productText2Col' )} xs={ 6 }>
              <p className={ cn('productText', 'productText2') }>Het bord zelf bestaat uit meerdere zones waarop te zien is hoe druk het in dat gebied is. Dit gebeurt door middel van een camera die scant, en daarmee het aantal mensen telt. Deze data wordt doorgegeven naar het hoofdscherm, waarop een topview te vinden is met alle zones. Zo is het makkelijk te zien waar het te druk is, en waar je rustig heen kan.</p>
            </Col>
          </Row>
          <Row className={ styles.row }>
            <Col className={ styles.col } xs={ 6 }>
              <p className={ styles.productText }>Het doel van dit concept/product is om de mensen te verspreiden op een drukke dag. Het gaat hier om een stukje crowdmanagement waardoor plekken niet overvol worden en mensen zich minder gaan ergeren aan de drukte. Door goed van tevoren aan te geven waar het op dit moment druk is, kunnen mensen zich beter anticiperen en op plekken verspreiden. Dit levert voor alle bezoekers een betere ervaring op en daarmee een leukere dag.</p>
            </Col>
            <Col xs={ 6 } className={ styles.productImageCol3 }>
              <div className={ styles.squareBehind }></div>
              <div className={ cn('productImageWrapper', 'productImageWrapper3') }>
                <img src={ mockbeach } className={ styles.productImage } />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default ProductIntroSection;
