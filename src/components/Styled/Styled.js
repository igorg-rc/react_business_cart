import React from "react"
import mainLogo from "../../img/logo/index_2.png"
import { Link } from 'react-scroll'
import classes from './Styled.module.css';

export default function Styled () {
  return (
    <div className={classes.Background}>
      <div className="container">
        
        <div className={classes.HelloBox.concat(' ', "white-text")}>
          <img src={mainLogo} alt="logo" className={classes.LogoImage} />
          <h1>Bonfire<span className="teal-text">Apps</span></h1>
          <h5>Flaming passion in creating the future</h5>
          <h5>Fast, inteligent, attractive apps for you</h5>
          <Link 
            href="#aboutUs"
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ><i className="medium material-icons teal-text">arrow_downward</i>
          </Link>
        </div>
        
      </div>
    </div>
  );
}



