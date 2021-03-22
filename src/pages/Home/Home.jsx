import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductIntroSection from '../../components/Productintrosection/ProductIntroSection';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Hero from '../../components/Hero/Hero';
import Navigation from '../../components/Navigation/Navigation';
import Process from '../../components/Process/Process';
import Concepts from '../../components/Concepts/Concepts';
import TeamMembers from '../../components/TeamMembers/TeamMembers';

class Home extends React.Component {
  render() {
    return (
      // {/* Place sections BETWEEN Container
      //   <HomeVideo />
      //   <Footer />
      // */}
      <React.Fragment>
        <Hero />
        <Navigation />

          <ProductIntroSection />
          <Process />
          <Concepts />
          {/* <ProductSlider /> */}
          <TeamMembers />

      </React.Fragment>
    )
  }
}

export default Home;
