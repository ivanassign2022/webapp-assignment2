import "styles/footer.css";
import footer from "images/disneypluslogo.svg";

function Footer() {

   return (

      <div className="footer container">
         
         <div>
            <img src={footer} alt="footerlogo" class="footerlogo"/>
         </div>
         <div>
            <a href="#top">Languages</a>
            <a href="#top">About</a>
            <a href="#top">Contact us</a>
            <a href="#top">Jobs</a>
            <a href="#top">Help</a>
            <a href="#top">Privacy</a>
            <br/>
            <a href="#top">© 2023 Disneyplus - Assignment 2</a>
         </div>
      </div> 

   );
}

export default Footer;