import React from "react";
// import {
//   HashLink
// } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link';

// import { HashLink } from 'react-scroll';
import styles from "../../components/Navigation/Navigation.module.scss";

class Navigation extends React.Component {
  render() {
    return (
      <header className={ styles.navigation }>
        <ul className={ styles.navigationList }>
          <li className={ styles.navigationListItem }>
            <HashLink to="/#product" className={ styles.navigationLink }>PRODUCT</HashLink>
          </li>
          <li className={ styles.navigationListItem }>
            <HashLink to="/#process" className={ styles.navigationLink }>PROCESS</HashLink>
          </li>
          <li className={ styles.navigationListItem }>
            <HashLink to="/#about" className={ styles.navigationLink }>ABOUT</HashLink>
          </li>
        </ul>
      </header>
    )
  }
}

export default Navigation;
