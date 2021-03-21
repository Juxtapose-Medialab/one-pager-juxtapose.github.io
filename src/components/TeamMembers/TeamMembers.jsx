import React from "react";
import memberJulia from '../../static/images/julia.jpg';
import memberHayen from '../../static/images/hayen.jpg';
import memberFrank from '../../static/images/frank.jpg';
import memberCarli from '../../static/images/carli.jpg';

import styles from "../../components/TeamMembers/TeamMembers.module.scss";


class TeamMembers extends React.Component {
  render() {
    return (
      <div className={ styles.teamMembers }>
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
      </div>
    )
  }
}

export default TeamMembers;
