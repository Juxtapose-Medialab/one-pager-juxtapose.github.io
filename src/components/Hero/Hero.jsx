import React from "react";
import sample from '../../static/Summerdrone.mp4';
import styles from "../../components/Hero/Hero.module.scss";

class Hero extends React.Component {
  render() {
    // const videoSource = "https://www.youtube.com/watch?v=t3AR78VVha4";
    return (
      // <div className={ styles.heroContainer }>
      //   <div className={ styles.heroVideo }>
      //     <iframe
      //       width="560"
      //       height="315"
      //       src="https://www.youtube.com/embed/t3AR78VVha4?autoplay=1&controls=0&loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&showinfo=0"
      //       title="YouTube video player"
      //       frameBorder="0"
      //       allow="autoplay"
      //       allowFullScreen>
      //     </iframe>
      //     {/* <iframe src="https://player.vimeo.com/video/526906760?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Summer drone edit of Scheveningen.mp4"></iframe> */}
      //   </div>
      // </div>
      <React.Fragment>
        <video className={ styles.heroVideo } autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
        <div className={ styles.heroVideoOverlay }>
          <h1 className={ styles.heroVideoTitle }>Hier moet een slogan</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Hero;
