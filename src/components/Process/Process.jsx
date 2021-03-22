import React from "react";
import styles from './Process.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import classNames from 'classnames/bind';

import transfer from '../../static/images/transfer.svg';
import crowd from '../../static/images/crowd.svg';
import safety from '../../static/images/safety.svg';
import arrowRight from '../../static/images/arrow-right.svg';

const cn = classNames.bind(styles);

class Process extends React.Component {
  render() {
    return (
        <div className={ styles.process }>
          <h2 className={ styles.processTitle }>Process</h2>
          <div className={ styles.deskresearch }>
            <Container>
              <h3 className={ styles.smallTitle }>Deskresearch</h3>
              <Row>
                <Col xs={ 3 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>Richting & thema’s</h3>
                    <p className={ styles.deskresearchCardText }>Om te kijken wat waar we ons op wilden focussen, hebben we gekeken naar welke richting we op wilden gaan en hierbij verschillende tehma’s verzonnen die spelen in de omgeving van Scheveningen en Den Haag.</p>
                  </div>
                </Col>
                <Col xs={ 3 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>De problemen</h3>
                    <p className={ styles.deskresearchCardText }>Er is gekeken naar de soorten problemen die zich in de omgeving afspelen. Denk hierbij aan bijvoorbeeld afval, geluidsoverlast, straatraces. Voor een van deze problemen willen we graag een oplossing bedenken.</p>
                  </div>
                </Col>
                <Col xs={ 3 }>
                <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>Doelgroep</h3>
                    <p className={ styles.deskresearchCardText }>
                        Nadat er een aantal thema’s waren gekozen, hebben we nagedacht over welke doelgroep we voornamelijk willen aanspreken. Dit zijn de personen waar wij een oplossing voor gaan bedenken in ons thema.</p>
                </div>
                </Col>
                <Col xs={ 3 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>Bestaande toepassingen</h3>
                    <p className={ styles.deskresearchCardText }>Er komt een stukje research bij kijken om te zien wat voor bestaande oplossingen er al gemaakt zijn in het kader van ons concept. Hieruit kunnen we eventueel inspiratie halen en op verder werken.</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className={ styles.designGuidelines }>
            <Container>
              <h3 className={ cn('smallTitle', 'smallTitleWhite') }>Design guidelines</h3>
              <Row>
              <Col className={ styles.designGuidelinesCol } xs={ 4 }>
                <div className={ styles.designGuideline }>
                  <img src={ transfer } className={ styles.designGuideLineIcon } />
                  <p className={ styles.designGuidelineText }>De doorstroom van mensen richting en vanuit Scheveningen moet worden bevorderd.</p>
                </div>
                <div className={ styles.designGuideline }>
                  <img src={ crowd } className={ styles.designGuideLineIcon } />
                  <p className={ styles.designGuidelineText }>Bezoekers moeten inzicht kunnen krijgen over de drukte in Scheveningen.</p>
                </div>
                <div className={ styles.designGuideline }>
                  <img src={ safety } className={ styles.designGuideLineIcon } />
                  <p className={ styles.designGuidelineText }>De veiligheid van de bezoekers moet gewaarborgd zijn en blijven.</p>
                </div>
              </Col>
              <Col className={ styles.designGuidelinesCol2 } xs={ 4 }>
                <img src={ arrowRight } className={ styles.designGuidelineArrow } />
              </Col>
              <Col className={ styles.designGuideLinesCol3 } xs={ 4 }>
                <div className={ styles.designGuidelinesShape }>
                  <div className={ styles.designGuidelinesShape2 }>
                    <p className={ styles.designGuideLinesShapeText }>Hoe kunnen we er voor zorgen dat de drukte beperkt wordt of verdwijnt?</p>
                  </div>
                </div>
              </Col>
              </Row>
            </Container>
          </div>
        </div>
    )
  }
}

export default Process;
