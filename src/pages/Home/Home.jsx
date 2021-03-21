import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductIntroSection from '../../components/Productintrosection/ProductIntroSection';
import ProductSlider from '../../components/ProductSlider/ProductSlider';

class Home extends React.Component {
  render() {
    return (
      // {/* Place sections BETWEEN Container
      //   <HomeVideo />
      //   <Footer />
      // */}

      <Container>
        <ProductIntroSection />
        <ProductSlider />
      </Container>
    )
  }
}

export default Home;
