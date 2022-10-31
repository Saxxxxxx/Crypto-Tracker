import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import React from "react";

const myStyle = {
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
};
function App() {
  return (
    <BrowserRouter>
      <div style={myStyle}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
