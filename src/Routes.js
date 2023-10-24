import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Ordes from './pages/Ordes';

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Ordes />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;