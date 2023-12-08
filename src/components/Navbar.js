import "styles/navbar.css";

import logo from "images/disneypluslogo.svg";

import { ReactComponent as HomeSVG } from "images/home.svg";
import { ReactComponent as ContactSVG } from "images/contact1.svg";
import { ReactComponent as ProfileSVG } from "images/profile.svg";
import { Link } from "react-router-dom";

function Navbar() {
   return (

      <div className="navbar">
         <div className="container">
            <img className="logo" src={logo} alt="logo" />

            <div className="menu">
               <Link to="/">
                  <HomeSVG className="icon" />
               </Link>
               <Link to="/contact">

               <ContactSVG className="icon" />
               </Link>
               <ProfileSVG className="icon" />
            </div>

         </div>
      </div>

   );
}

export default Navbar;
