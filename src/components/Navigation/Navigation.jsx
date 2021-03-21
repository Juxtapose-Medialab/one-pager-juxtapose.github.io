import React from "react";
import {
  Link
} from "react-router-dom";
import styles from "../../components/Navigation/Navigation.module.scss";

class Navigation extends React.Component {
  render() {
    return (
      <header className={ styles.navigation }>
        <ul className={ styles.navigationList }>
          <li className={ styles.navigationListItem }>
            <Link to="/" className={ styles.navigationLink }>INTRO</Link>
          </li>
          <li className={ styles.navigationListItem }>
            <Link to="/product" className={ styles.navigationLink }>PRODUCT</Link>
          </li>
          <li className={ styles.navigationListItem }>
            <Link to="/team" className={ styles.navigationLink }>TEAM</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Navigation;
