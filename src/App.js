import "./styles/app.css";

import Navbar from "./components/Navbar.js";
import AddCard from "./components/AddCard.js";
import Cards from "./components/Cards.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Comments from "./components/Comments.js";

import { Routes, Route } from "react-router-dom";
import {useState} from "react";

function App() {

  const [displayAddCard, setDisplayAddCard] = useState(false);
  const [commentId, setCommentId] = useState('');
  //console.log(displayAddCard);

  return (
    <>
      {displayAddCard && <AddCard getCommentId={commentId} closeDisplay={() => { setDisplayAddCard(false)}} />}

      <Navbar  />
      <Routes>
          <Route path="/" element={<Cards openDisplay={(cid) => { setDisplayAddCard(true); setCommentId(cid) }} />} />
          <Route path="comments/:id" element={<Comments openDisplay={(cid) => { setDisplayAddCard(true); setCommentId(cid) }} />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      

      <Footer/>
    </>
  );
}

export default App;
