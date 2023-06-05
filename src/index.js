import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./layout/Header";
import Home from "./pages/Home/index";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <Home />
    </React.StrictMode>
);
