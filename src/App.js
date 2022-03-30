import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/index';
import NewArticule from './views/NewArticule'
import DetallesPost from './views/DetallesPost';
import LogIn from './views/LogIn'
import Post from './views/post';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newpost" element={<NewArticule />} />
        <Route path="login" element={<LogIn />} />
        <Route path="posts/:idPost" element={<DetallesPost />} />
       {/*  <Route path="posts/:idPost/edit" element={<EditPost />} />
        <Route path="create-account" element={<SignUp/>} /> */}
      </Routes>
    
    </div>
  );
}

export default App;
