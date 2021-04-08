import React from "react";
import memberJulia from '../../static/images/julia.jpg';
import memberHayen from '../../static/images/hayen.jpg';
import memberFrank from '../../static/images/frank.jpg';
import memberCarli from '../../static/images/carli.jpg';
import arrow1 from '../../static/images/arrow-top-left.svg';
import arrow2 from '../../static/images/arrow-bottom-left.svg';
import juxtapose from '../../static/images/juxtapose.png';


import { Container, Row, Col } from 'react-bootstrap';

import styles from "../../components/TeamMembers/TeamMembers.module.scss";


class TeamMembers extends React.Component {
  render() {
    return (
      <section className={ styles.teamMembers } id="about">
        <Container>
          <h2 className={ styles.teamMembersTitle }>About us</h2>
          <Row className={ styles.row }>
            <Col xs={ 3 } className={ styles.col }>
              <div className={ styles.teamMemberCard }>
                <div className={ styles.teamMemberImageWrapper }>
                  <img src={ memberJulia } className={ styles.teamMemberImage } />
                </div>
                <div className={ styles.teamMemberCardText }>
                  <div className={ styles.teamMemberTitleContainer }>
                    <p className={ styles.teamMemberTitle }>Designer</p>
                  </div>
                  <h2 className={ styles.teamMemberName }>Julia Van der Meijden</h2>
                  <p className={ styles.teamMemberText }>Mijn naam is Julia, 24 jaar en ik ben een 3e jaars CMD'er. Naast dit project ben ik ook peercoach binnen mijn opleiding.

Ik ben iemand die niet om de zaken heen draait en altijd eerlijk feedback probeert te geven. Dit kan soms voor wat gezond "head-butting" zorgen, maar ik ben van mening dat dit (in combinatie met een relaxte en open sfeer binnen het team) resulteert in een beter eind resultaat.</p>
                </div>
              </div>
              <div className={ styles.teamMemberCard }>
                <div className={ styles.teamMemberImageWrapper }>
                  <img src={ memberFrank } className={ styles.teamMemberImage } />
                </div>
                <div className={ styles.teamMemberCardText }>
                  <div className={ styles.teamMemberTitleContainer }>
                    <p className={ styles.teamMemberTitle }>Designer</p>
                  </div>
                  <h2 className={ styles.teamMemberName }>Frank Hendriks</h2>
                  <p className={ styles.teamMemberText }>Ik ben Frank Hendriks. Derdejaars Communication and Multimedia Design student. Naast mijn opleiding ben ik streamer op Twitch en voetbal ik in het eerste elftal bij mijn plaatselijke voetbalvereniging. Ik geef altijd eerlijke feedback en probeer met humor de sfeer in de groep te bevorderen.</p>
                </div>
              </div>
            </Col>
            <Col xs={ 6 } className={ styles.col2 }>
              <div className={ styles.education }>
                <img src={ arrow1 } className={ styles.arrow1 } />
                <p className={ styles.educationTitle }>CMD</p>
                <img src={ arrow2 } className={ styles.arrow2 } />
              </div>
              <img src={ juxtapose } className={ styles.juxtaposeImage } />
              <div className={ styles.education }>
                <img src={ arrow1 } className={ styles.arrow3 } />
                <p className={ styles.educationTitle }>CMGT</p>
                <img src={ arrow2 } className={ styles.arrow4 } />
              </div>
            </Col>
            <Col xs={ 2 }>
            <div className={ styles.teamMemberCard }>
                <div className={ styles.teamMemberImageWrapper }>
                  <img src={ memberHayen } className={ styles.teamMemberImage } />
                </div>
                <div className={ styles.teamMemberCardText }>
                  <div className={ styles.teamMemberTitleContainer }>
                    <p className={ styles.teamMemberTitle }>Developer</p>
                  </div>
                  <h2 className={ styles.teamMemberName }>Hayen Phan</h2>
                  <p className={ styles.teamMemberText }>Ik ben Hayen, 22 jaar en volg op het moment de opleiding CMGT. Overdag ben ik vaak bezig met programmeren, maar in de avond besteed ik mijn tijd aan het bespelen en maken van muziek. Ik zie mijzelf als een perfectionistisch, nogal chaotisch, maar wel ambitieuze persoon die er altijd voor openstaat om mensen gerust te stellen en te helpen.</p>
                </div>
              </div>
              <div className={ styles.teamMemberCard }>
                <div className={ styles.teamMemberImageWrapper }>
                  <img src={ memberCarli } className={ styles.teamMemberImage } />
                </div>
                <div className={ styles.teamMemberCardText }>
                  <div className={ styles.teamMemberTitleContainer }>
                    <p className={ styles.teamMemberTitle }>Developer</p>
                  </div>
                  <h2 className={ styles.teamMemberName }>Carli Nabbe</h2>
                  <p className={ styles.teamMemberText }>Ik ben Carli. 28 jaar en van de opleiding CMGT. In mijn vrije tijd ben ik voornamelijk bezig met verschillende games, coderen of een goede serie te kijken. Ondertussen helemaal onder geplakt met plakplaatjes maar voor de rest niet gevaarlijk. Ik zie mijzelf als een rustig persoon die goed kan luisteren en mensen van logische feedback voorziet.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default TeamMembers;
