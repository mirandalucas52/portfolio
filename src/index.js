import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Header from "./layout/Header";
import Home from "./pages/Home/index";
import Footer from "./layout/Footer/index";
import Work from "./pages/Work/index";
import Works from "./works.json";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/portfolio" element={<Home />} />
                <Route path="/work/:id" element={<Work datas={Works} />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
