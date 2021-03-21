import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';
import Navigation from '../../components/Navigation/Navigation';

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
        <Container>
          <div>
            Homepage
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default Home;
