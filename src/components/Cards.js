import "styles/cards.css";
import Card from "./Card";

import { comments } from "data";

function Cards() {

 // console.log(comments);
 // console.log(comments[0].user);

  return (

   <div className="cards container">
     
     {comments.map((comment) => (
          
          <Card
             image={ comment.image}
             user = {comment.user}
             info = {comment.info}
             tags = {comment.tags}
             key = {comment.id}
             time = {comment.time}
          />

       ))}


   </div>

  );
}

export default Cards;
