import "styles/cardheader.css";

import { ReactComponent as MoreSVG } from "images/more.svg";

function CardHeader({name}) {

//create a url with a random number to get different random images
var avatarURL = "https://i.pravatar.cc/" + (Math.round(Math.random() * 500));


  return (

    <div className="cardheader">

      <img
         className="avatarimg"
         src={avatarURL}
         alt="avatar"
      />
      <span class="ch-name">{name}</span>
    <MoreSVG />

 </div>



  );
}

export default CardHeader;
