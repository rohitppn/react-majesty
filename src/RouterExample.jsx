import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

const RouterExample = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes></Routes>
    </BrowserRouter>
  );
};

export default RouterExample;
