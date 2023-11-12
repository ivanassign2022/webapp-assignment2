import "styles/card.css";

import CardHeader from "./CardHeader.js";

function Card({image,user,info,tags,time}) {

   return (

      <div className="card">
         <CardHeader name={user}
         />
         <img className="cardimage" src={image} alt="card" />
         <p class="mt-4">{info}</p>
         <h6>{tags}</h6>
         <p class="time">{time}</p>
      </div>
      
   );
}

export default Card;
