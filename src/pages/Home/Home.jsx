import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';

class Home extends React.Component {
  render() {
    return (
      // {/* Place sections BETWEEN Container
      //   <HomeVideo />
      //   <Footer />
      // */}
      <React.Fragment>
        <Hero />
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
