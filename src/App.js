import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contactus from "./components/Contactus";
import Diary from "./components/Diary";
import FruitVeg from "./components/FruitVeg";
import Grains from "./components/Grains";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Signup from "./components/Signup";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          <Route path="/Products" element={<Products/>}/>
          
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/FruitVeg" element={<FruitVeg/>}/>
          <Route path="/Grains" element={<Grains/>}/>
          <Route path="/Diary" element={<Diary/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;



/*import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/Signup.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/