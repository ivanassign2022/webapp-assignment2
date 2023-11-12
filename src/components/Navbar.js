import "styles/navbar.css";

import logo from "images/disneypluslogo.svg";

import { ReactComponent as HomeSVG } from "images/home.svg";
import { ReactComponent as ContactSVG } from "images/contact1.svg";
import { ReactComponent as ProfileSVG } from "images/profile.svg";

function Navbar() {
   return (

      <div className="navbar">
         <div class="container">
            <img className="logo" src={logo} alt="logo" />

            <div className="menu">
               <HomeSVG className="icon" />
               <ContactSVG className="icon" />
               <ProfileSVG className="icon" />
            </div>

         </div>
      </div>

   );
}

export default Navbar;
