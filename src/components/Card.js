import "styles/card.css";

// import {useEffect} from "react";

import CardHeader from "./CardHeader.js";

function Card({opens,id,image,title,info,tags,time,comments}) {
   const handleClick = () => {
      // opens("dd");
      opens(id);
    };
   // useEffect((props) => {
   //    opens("dd");
   // },[props]);
      return (

         <div className="card">
            <CardHeader name={title}
            />
            <img className="cardimage" src={image} alt="card"   />
            <p className="mt-4">{info}</p>
            <h6>{tags}</h6>
            <p className="time">{time}</p>
            <hr />
            <span className="commentCount"> # of Comments: <a href={'/comments/'+id}>{comments.length}</a> </span>
            <button className="addCommentsBtn" title="Add Comments" alt="Add Comments" onClick ={handleClick}> + </button>
         </div>
         
      );
  
}

export default Card;
