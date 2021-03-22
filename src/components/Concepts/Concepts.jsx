import React from "react";
import sample from '../../static/Summerdrone.mp4';
import styles from "../../components/Concepts/Concepts.module.scss";
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import concept1 from '../../static/images/concept1.png';
import concept2 from '../../static/images/concept2.png';
import concept3 from '../../static/images/concept3.png';

const cn = classNames.bind(styles);

class Hero extends React.Component {
  render() {
    // const videoSource = "https://www.youtube.com/watch?v=t3AR78VVha4";
    return (
      <section className={ styles.concepts }>
        <Container>
          <h3 className={ cn('smallTitle') }>Different concepts</h3>
          <Row>
            <Col xs={ 4 } className={ styles.conceptImageColumn }>
              <img src={ concept1 } className={ styles.conceptImage } />
            </Col>
            <Col xs={ 4 } className={ styles.conceptImageColumn }>
              <img src={ concept2 } className={ styles.conceptImage } />
            </Col>
            <Col xs={4 }className={ styles.conceptImageColumn }>
              <img src={ concept3 } className={ styles.conceptImage } />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Hero;
