import "styles/addcard.css";

import { ReactComponent as CloseSVG } from "images/close.svg";
import moment from 'moment';

import firebase from "firebase/compat/app";

import { useState } from "react";

function AddCard({getCommentId, closeDisplay}) {

   // const commentsRef = firebase.firestore().collection("comments");
   // const commentsRefb = firebase.firestore().collection("cards");

   const [userComment, setUserComment] = useState("");
   const [userName, setUserName] = useState("");
   // const [imageTags, setImageTags] = useState("");
   // const commentId = getCommentId;
   console.log(getCommentId);

   const addCardData = async (e) => {
      
      e.preventDefault();
      console.log(getCommentId);

      const commentsRefb = firebase.firestore().collection("cards").doc(getCommentId);
      // Atomically add a new region to the "regions" array field.
      let timeString = moment().format('Do MMM YYYY, hh:mm');
      await commentsRefb.update({
         comments: firebase.firestore.FieldValue.arrayUnion({'name':userName,'content':userComment,'time':timeString})
         
      });
      // var newDocRef = commentsRef.doc();
      // newDocRef.set({
      //    user:userName,
      //    info: userComment,
      //    tags: imageTags,
      // });

      setUserComment("");
      setUserName("");
      // setImageTags("");
      closeDisplay();
   };

   return (


   <div className="overlay">

      <div className="modal">

      <CloseSVG className="closeicon" onClick = {closeDisplay}/>
      <p> # {getCommentId} </p>
      <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Add a name..."

         />

         <input
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            placeholder="Add a comment..."
         />
         

         <button onClick={addCardData} disabled={!userName||!userComment}>
            Add
         </button>

      </div>
   
   </div>

   );

}

export default AddCard;
