import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Bank from "./components/Bank";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path=":ifsc" element={<Bank />} />
            </Routes>
        </Provider>
    </BrowserRouter>
);
