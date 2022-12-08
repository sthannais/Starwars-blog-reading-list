import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Cards from "./components/Cards";
import DetailsCards from "./views/DetailsCards";
import DetailsPlanets from "./views/DetailsPlanets";
import injectContext from "../src/store/Context";

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/detailsCards/:id" element={<DetailsCards />} />
            <Route path="/detailsPlanets/:id" element={<DetailsPlanets />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default injectContext(App);
