import React from "react";
import style from './Button.module.scss';

class Button extends React.Component {
  render() {
    return (
      <div className="container">
        <p className={ style.title }>Hoi</p>
      </div>
    )
  }
}

export default Button;
