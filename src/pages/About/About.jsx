import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Button from "../components/Button/Button";
import style from './About.module.scss';

class About extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p className={ style.title }>First column</p>
          </Col>
          <Col>
            <p className={ style.title }>Second column</p>
          </Col>
          <Button>Test</Button>
        </Row>
      </Container>
    )
  }
}

export default About;
