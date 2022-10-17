import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Lists from "./components/Lists";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="Lists" element={<Lists />} />
      </Routes>
    </>
  );
}

export default App;
