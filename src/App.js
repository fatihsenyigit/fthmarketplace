import React from "react";
import Navigation from "./elements/Navigation";
import HomePage from "./elements/HomePage";
import ListedNFT from "./elements/CreateNFT";
import MyNFT from "./elements/MyNFT"
import { Link, Route, Routes } from "react-router-dom";
import CreateNFT from "./elements/CreateNFT";
import SellNFT from "./elements/SellNFT";




function App() {
  return (
    <div>
      <Navigation></Navigation>
      
      <br></br>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/CreateNFT" element={<CreateNFT></CreateNFT>}></Route>
        <Route path="/MyNFTs" element={<MyNFT></MyNFT>}></Route>
        <Route path="/SellNFT" element={<SellNFT></SellNFT>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
