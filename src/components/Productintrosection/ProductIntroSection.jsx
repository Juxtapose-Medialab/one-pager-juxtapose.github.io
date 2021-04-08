import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ProductIntroSection.module.scss';
import scheveningenImage1 from '../../static/images/beach.png';
import iphoneMockups from '../../static/images/iphone-mockups.png';
import iphoneHandMockup from '../../static/images/iphone-hand-mockup.png';
import mockupParking from '../../static/images/board-mockup.png';
import mockupScheveningen from '../../static/images/board-mockup-beach.png';
import iphoneLocations from '../../static/images/location-mockups.png';
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
              <p className={ styles.productText }>Beachradar is een digitale crowdmanagement tool. Het doel van dit concept/product is om de mensen te verspreiden op een drukke dag. Het gaat hier om een stukje crowdmanagement waardoor plekken niet overvol worden en mensen zich minder gaan ergeren aan de drukte. Door goed van tevoren aan te geven waar het op dit moment druk is, kunnen mensen zich beter anticiperen en op plekken verspreiden. Dit levert voor alle bezoekers een betere ervaring op en daarmee een leukere dag.</p>
            </Col>
            <Col className={ cn('col', 'productImageCol2') } xs={ 6 }>
              <div className={ styles.squareBehind }></div>
                <div className={ cn('productImageWrapper', 'productImageWrapper1')}>
                  <img src={ scheveningenImage1 } className={ cn('productImage', 'productImage1') } />
                </div>
            </Col>
          </Row>
          <Row className={ styles.row }>
            <Col className={ styles.col } xs={ 6 }>
              <div className={ cn('productImageWrapper', 'productImageWrapper2Iphones') }>
                <img src={ iphoneMockups } className={ cn('productImageWhiteBackground') } />
              </div>
            </Col>
            <Col className={ cn('col', 'productText2Col' )} xs={ 6 }>
              <p className={ cn('productText', 'productText2') }>Beachradar biedt gebruikers een inkijkje in de drukte op drie verschillende niveau’s, waarbij de data specifieker wordt hoe dichter zij bij het strand komen. Een app voor on the go, een bord bij parkeergelegenheden en een bord op de boulevard.</p>
            </Col>
          </Row>
          <Row className={ styles.row }>
            <Col className={ cn('col') } xs={ 6 }>
              <p className={ styles.productText }>Voordat de gebruiker in de auto stapt, kunnen zij via de app alvast checken waar het wel/niet druk is. Ook is er een route en openbaar vervoer pagina geïntegreerd in de app, om de reis zo makkelijk mogelijk te maken.</p>
            </Col>
            <Col className={ cn('col', 'productImageCol2') } xs={ 6 }>
              <div className={ styles.squareBehind }></div>
                <div className={ cn('productImageWrapper', 'productImageWrapper3')}>
                  <img src={ iphoneHandMockup } className={ cn('productImage', 'productImage2') } />
                </div>
            </Col>
          </Row>
          <Row className={ styles.row }>
            <Col className={ styles.col } xs={ 6 }>
              <div className={ cn('productImageWrapper', 'productImageWrapper4') }>
                <img src={ mockupParking } className={ styles.productImageWhiteBackground } />
              </div>
            </Col>
            <Col className={ cn('col', 'productText2Col' )} xs={ 6 }>
              <p className={ cn('productText', 'productText2') }>Het bord bij de parkeergelegenheden geeft extra informatie weer over waar andere parkeergelden zich bevinden en hoe druk deze zijn. Zodat men altijd nog kan kiezen om ergens anders heen te gaan als het vol is.</p>
            </Col>
          </Row>
          <Row className={ styles.row }>
            <Col className={ cn('col') } xs={ 6 }>
              <p className={ styles.productText }>De borden op de boulevard geven een ingezoomde weergaven van alleen het strand waar de persoon zich op dat moment bevindt, opgedeeld in zones.</p>
            </Col>
            <Col className={ cn('col', 'productImageCol2') } xs={ 6 }>
              <div className={ styles.squareBehind }></div>
                <div className={ cn('productImageWrapper', 'productImageWrapper5')}>
                  <img src={ mockupScheveningen } className={ cn('productImage', 'productImage3')} />
                </div>
            </Col>
          </Row>
          <Row className={ styles.row }>
            <Col className={ styles.col } xs={ 6 }>
              <div className={ cn('productImageWrapper', 'productImageWrapper6') }>
                <img src={ iphoneLocations } className={ styles.productImageWhiteBackground } />
              </div>
            </Col>
            <Col className={ cn('col', 'productText2Col' )} xs={ 6 }>
              <p className={ cn('productText', 'productText2') }>Bij de app en het bord van de parkeergelegenheden staat de kaart met het noorden naar boven. Het bord op de boulevard heeft een kaart waarop het strand horizontaal wordt weergegeven. Tijdens de test met gebruikers kwam naar voren dat zij dit het meest overzichtelijk vinden.</p>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default ProductIntroSection;
