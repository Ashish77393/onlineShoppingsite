import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
