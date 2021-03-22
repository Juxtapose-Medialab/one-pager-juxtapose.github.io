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
      <Container>
        <div className={ styles.teamMembers }>
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
                  <p className={ styles.teamMemberText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue ut velit vehicula malesuada non at diam. Fusce ac tristique libero. Duis gravida augue vitae tempor pharetra. Quisque porta, metus vel fermentum pharetra, odio magna ultricies est, auctor pellentesque ex massa in felis.  Integer bibendum tincidunt mauris, vehicula commodo libero aliquet pretium. Curabitur ullamcorper nisi nibh. </p>
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
                  <p className={ styles.teamMemberText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue ut velit vehicula malesuada non at diam. Fusce ac tristique libero. Duis gravida augue vitae tempor pharetra. Quisque porta, metus vel fermentum pharetra, odio magna ultricies est, auctor pellentesque ex massa in felis.  Integer bibendum tincidunt mauris, vehicula commodo libero aliquet pretium. Curabitur ullamcorper nisi nibh. </p>
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
                  <p className={ styles.teamMemberText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue ut velit vehicula malesuada non at diam. Fusce ac tristique libero. Duis gravida augue vitae tempor pharetra. Quisque porta, metus vel fermentum pharetra, odio magna ultricies est, auctor pellentesque ex massa in felis.  Integer bibendum tincidunt mauris, vehicula commodo libero aliquet pretium. Curabitur ullamcorper nisi nibh. </p>
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
                  <p className={ styles.teamMemberText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue ut velit vehicula malesuada non at diam. Fusce ac tristique libero. Duis gravida augue vitae tempor pharetra. Quisque porta, metus vel fermentum pharetra, odio magna ultricies est, auctor pellentesque ex massa in felis.  Integer bibendum tincidunt mauris, vehicula commodo libero aliquet pretium. Curabitur ullamcorper nisi nibh. </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default TeamMembers;
