import React from "react";
import { HeroVideo } from 'react-hero-video'
import styles from "../../components/Hero/Hero.module.scss";

class Hero extends React.Component {
  render() {
    const videoSource = "https://www.youtube.com/watch?v=t3AR78VVha4";
    return (
      <video autoPlay="autoplay" loop="loop" muted className={ styles.video }>
        <source src={ videoSource } type="video/mp4" />
      </video>
    )
  }
}

export default Hero;
