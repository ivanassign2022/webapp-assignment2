import "styles/comments.css";
// import Card from "./Card";
import {
 
  useParams
} from "react-router-dom";
// import { comments } from "data";

import firebase from "firebase/compat/app";
import { useCollection,useCollectionData,useDocumentData } from "react-firebase-hooks/firestore";


function Comments({openDisplay}) {
  let { id } = useParams();

  const commentsRefb = firebase.firestore().collection("cards").doc(id);
  let [data,loading,error] =  useDocumentData(commentsRefb);
  const handleClick = () => {
    // opens("dd");
    openDisplay(id);
  };
  let comments = data && data.comments;
  console.log(comments);
  
    return (
      <div className="comment-container container">
        <div className="comment-header">
          <button className="c-addCommentsBtn" title="Add Comments" alt="Add Comments" onClick ={handleClick}> + Comment</button>
          <div className="c-title">Comments of { data && data.title }</div>
          <div className="c-image"><img className="c-cardimage" src={ data && data.image } alt="card"   /></div>
          <div className="c-tag">Tags: { data && data.tags }</div>
        </div>

        <div className="comment-body">
          {comments && comments.map((doc) => (    
              <div className="comment">
                <div className="col"> <img className="avatarimg" src={"https://i.pravatar.cc/" + (Math.round(Math.random() * 500))} alt="avatar"/> </div>
                <div className="col">{doc.name}</div>
                <div className="col">{doc.content}</div>
                <div className="col">{doc.time}</div>
                <div class="line-break"></div>
              </div>
          ))}
        </div>
      </div>

    )
}

export default Comments;
