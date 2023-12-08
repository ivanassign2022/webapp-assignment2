import "styles/cards.css";
import Card from "./Card";

// import { comments } from "data";

import firebase from "firebase/compat/app";
import { useCollection,useCollectionData } from "react-firebase-hooks/firestore";


function Cards({openDisplay}) {

   const commentsRefb = firebase.firestore().collection("cards");
   let z = [];
   const [docb] = useCollection(commentsRefb, { idField: "id" });
   docb && docb.forEach((item)=>{
    console.log(item);
    let t = item.data();
    if(typeof(t['comments'])=='undefined'){
      t['comments'] = [];
    }
    t["id"]=item.id;  
    z.push(t);
  })
    console.log(z);
    // this.state.something = 'changed';
    //  var newDocRef = commentsRef.doc();
    //  newDocRef.set({
    //      user:"dd",
    //      info: "dsafsa",
    //      tags: "asdfsafd",
    //      id: newDocRef.id
    //   });
    // console.log(docs);
    return (

      <div className="cards container">
       {z && z.map((doc) => (     
            <Card
              opens = {openDisplay}
               id={doc.id}
              image={ doc.image}
              title = {doc.title}
              info = {doc.info}
              tags = {doc.tags}
               key = {doc.id}
              time = {doc.time}
              comments = {doc.comments}
            />
            
        ))}

      </div>

    )
}

export default Cards;
