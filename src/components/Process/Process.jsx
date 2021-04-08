import React from "react";
import styles from './Process.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import classNames from 'classnames/bind';

import transfer from '../../static/images/transfer.svg';
import crowd from '../../static/images/crowd.svg';
import safety from '../../static/images/safety.svg';
import population from '../../static/images/population.svg';
import arrowRight from '../../static/images/arrow-right.svg';

const cn = classNames.bind(styles);

class Process extends React.Component {
  render() {
    return (
        <section className={ cn('process') } id="process">
          <h2 className={ styles.processTitle }>Process</h2>
          <div className={ styles.deskresearch }>
            <Container>
              <h3 className={ cn('smallTitle', 'smallTitleResearch') }>Research</h3>
              <div className={ styles.deskresearchContent }>
                <p className={ styles.deskresearchText }>Allereerst moest er een beeld worden gevormd van de problemen binnen Scheveningen. Door middel van algemene deskresearch sprongen twee onderwerpen er het meeste uit: de drukte (crowd management) & illegale straatraces. </p>
                <p className={ styles.deskresearchText }> Na de field research in allebei deze thema’s, lag de voorkeur bij het crowd management. Hier is toen uitvoerig verdiepende deskresearch naar gedaan om bestaande oplossingen en technologische mogelijkheden te verkennen. </p>
                <p className={ styles.deskresearchText}>Omdat een probleem niet opgelost kan worden zonder input van de gebruiker, is er een enquete uitgezet.</p>
                <p className={ styles.deskresearchText}>De insights die uit al dit onderzoek naar voren kwamen zijn samen met de ontwerprichtlijnen de rode draad geweest binnen brainstorm sessies en het kiezen van het concept.</p>
              </div>
              <h3 className={ cn('smallTitle', 'smallTitleResearch') }>Insights</h3>
              <Row className={ styles.deskresearchColumn1 }>
                <Col xs={ 4 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>Drukte binnen Scheveningen</h3>
                    <p className={ styles.deskresearchCardText }>Mensen zouden het waardevol vinden om inzicht te krijgen in de drukte binnen Scheveningen. Dit gaat voornamelijk over de parkeerplekken en/of drukte op het strand zelf.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wie?</h4>
                    <p className={ styles.deskresearchCardText }>(81,25%) van bevraagden uit enquete</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wat zegt de doelgroep?</h4>
                    <p className={ styles.deskresearchCardText }>Zouden mensen het waardevol vinden om te zien waar in Scheveningen het druk is? </p>
                    <p className={ styles.deskresearchCardText }>".....vooral als het gaat om parkeerplekken of drukte op het strand zelf"</p>
                    <p className={ styles.deskresearchCardText }>"....dan kan je rekening houden met waar je het liefst naartoe zou willen of niet"</p>
                  </div>
                </Col>
                <Col xs={ 4 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>Vogel- en vogelpoepproof</h3>
                    <p className={ styles.deskresearchCardText }>Ons te ontwerpen concept moet Vogel- en vogelpoepproof zijn, omdat er veel meeuwen op het strand zijn die zorgen voor overlast.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wie?</h4>
                    <p className={ styles.deskresearchCardText }>De drie bevraagden uit de enquete.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wat zegt de doelgroep?</h4>
                    <p className={ styles.deskresearchCardText }>"De meeuwen?" </p>
                    <p className={ styles.deskresearchCardText }>"Niet zo veel misschien de meeuwen"</p>
                    <p className={ styles.deskresearchCardText }>"de vogels. Ze poepen overal."</p>
                  </div>
                </Col>
                <Col xs={ 4 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>Beter gebruik van bestaande vervoer</h3>
                    <p className={ styles.deskresearchCardText }>HTM heeft een zomerdienstregeling en hierbij is het inzetten van meer trams geen optie. Er moet dus beter gebruik gemaakt worden van het bestaande vervoer.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wie?</h4>
                    <p className={ styles.deskresearchCardText }>HTM.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wat zegt de doelgroep?</h4>
                    <p className={ styles.deskresearchCardText }>"Tram 5: de strandexpress, rijdt van 18 juli t/m 30 augustus."</p>
                    <p className={ styles.deskresearchCardText }>"Als we nog meer trams zouden inzetten dan wordt het filerijden en dan loopt het verkeer nog meer vast.' Daarnaast gaat dat eventueel ten koste van de veiligheid."</p>
                  </div>
                </Col>
              </Row>
              <Row className={ styles.deskresearchColumn2 }>
                <Col xs={ 4 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>Spreiding van de mensen over het strand</h3>
                    <p className={ styles.deskresearchCardText }>Mensen vinden het vaak te druk waardoor hun ervaringen minder fijn worden. Een spreiding van de mensen over het strand en de boulevard kan de ervaring van Scheveningen verbeteren en de drukte ontnemen.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wie?</h4>
                    <p className={ styles.deskresearchCardText }>Bevraagden uit de enquête.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wat zegt de doelgroep?</h4>
                    <p className={ styles.deskresearchCardText }>"Omdat het vaak zo druk is en veel bij elkaar zijn gaan mensen zich ergeren aan elkaar. Mensen vinden muziek van elkaar te hard en hebben last van elkaar."</p>
                    <p className={ styles.deskresearchCardText }>"De mentaliteit die er heerst. Er lopen veel tokkies om het zo maar even te zeggen, haha."</p>
                    {/* <p className={ styles.deskresearchCardText }>"...van die groepen die hele boulevard innemen als ze lopen."</p> */}
                  </div>
                </Col>
                <Col xs={ 4 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>HTM app is niet inzichtelijk genoeg</h3>
                    <p className={ styles.deskresearchCardText }>De manier waarop de HTM app drukte aangeeft is niet inzichtelijk genoeg voor de gebruiker.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wie?</h4>
                    <p className={ styles.deskresearchCardText }>Bevraagden uit de enquête.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wat zegt de doelgroep?</h4>
                    <p className={ styles.deskresearchCardText }>"De HTM app werkt slecht. Ik zie in bushokjes overal posters hangen dat ze een nieuwe functie hebben in hun app door corona om "drukte" te kunnen zien, maar dit is helemaal niet overzichtelijk. Er staan achter de reis 1 t/m 3 ingevulde poppetjes en daar houdt het op."</p>
                  </div>
                </Col>
                <Col xs={ 4 }>
                  <div className={ styles.deskresearchCard }>
                    <h3 className={ styles.deskresearchCardTitle }>Mensen vermijden Scheveningen vanwege de drukte</h3>
                    <p className={ styles.deskresearchCardText }>Een groot gedeelte van de mensen gaat in de zomer al niet naar Scheveningen, of zouden een andere badplaats overwegen als zij van te voren al weten dat het zo druk is.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wie?</h4>
                    <p className={ styles.deskresearchCardText }>Artikel AD + Enquete bevraagden.</p>
                    <h4 className={ styles.deskresearchSubtitle }>Wat zegt de doelgroep?</h4>
                    <p className={ styles.deskresearchCardText }>"Als ik had geweten dat het zo druk was, was ik wel ergens anders heen gegaan."</p>
                    <p className={ styles.deskresearchCardText }>"Omdat het hier in de zomer altijd zo druk is ga ik nooit naar dit strand om te zwemmen."</p>
                    <p className={ styles.deskresearchCardText }>"...op extreem drukke dagen ga ik liever niet."</p>
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
                  <div className={ styles.designGuidelinesWrapper }>
                    <div className={ styles.designGuideline }>
                      <img src={ crowd } className={ styles.designGuideLineIcon } />
                      <p className={ styles.designGuidelineText }>Bezoekers moeten inzicht kunnen krijgen over de drukte in Scheveningen.</p>
                    </div>
                    <div className={ styles.designGuideline }>
                      <img src={ transfer } className={ styles.designGuideLineIcon } />
                      <p className={ styles.designGuidelineText }>De doorstroom van mensen richting en vanuit Scheveningen moet worden bevorderd.</p>
                    </div>
                    <div className={ styles.designGuideline }>
                      <img src={ population } className={ styles.designGuideLineIcon } />
                      <p className={ styles.designGuidelineText }>Het concept moet de bevolkingsverdeling op en rondom het strand bevorderen.</p>
                    </div>
                    <div className={ styles.designGuideline }>
                      <img src={ safety } className={ styles.designGuideLineIcon } />
                      <p className={ styles.designGuidelineText }>De veiligheid van de bezoekers moet gewaarborgd zijn en blijven.</p>
                    </div>
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
              <Row></Row>
            </Container>
          </div>
        </section>
    )
  }
}

export default Process;
