import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

//components
import {Button} from './commons/Button'

const NavBar = () => {
    //state
    const[isMenuClicked,setIsMenuClicked]=useState(false)

    //functions
    const IconMenu= isMenuClicked?faTimes:faBars

  return (
    <div>
      <div>
        <nav>
          <div className="navBarContainer">
            <Link to="/" className="px-1">
              AGRO
            </Link>
            <Link to="/" className="navBarElement">
              pagina 1
            </Link>
            <Link to="/" className="navBarElement">
              pagina 2
            </Link>
            <Link to="/" className="navBarElement">
              pagina 3
            </Link>
            <div
              className="menuIcon"
              onClick={() => {setIsMenuClicked(!isMenuClicked)}}
            >
              <FontAwesomeIcon icon={IconMenu} size="lg" />
            </div>
          </div>
        </nav>
      </div>
      <div className={`${isMenuClicked?'menuDisplayedMobile':'menuInactive'}`}>
      <Button />
      </div>
      
    </div>
  );
};

export default NavBar;
