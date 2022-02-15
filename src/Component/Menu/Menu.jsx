import "./Menu.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import Sample from "./Sample/index"
// import Action from "../"

const Home = lazy(() => import("../Home/index"));
const Books = lazy(() => import("../Books/index"));
const New_Arrival = lazy(() => import("../New_Arrival/index"));
const Pre_order = lazy(() => import("../Pre_order/index"));
const Bestsellers = lazy(() => import("../Bestsellers/index"));
const Text_books = lazy(() => import("../Text_books/index"));
const Award_winners = lazy(() => import("../Award_winners/index"));
const Feature_Authors = lazy(() => import("../Feature_Authors/index"));

function template() {
  return (
    <div className="menu">
      <BrowserRouter>
        <ul className="menu-Item">
          <li className="menu-Link">
            <Link exact to="/home">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li className="menu-Link">
            <Link to="/books">Books</Link>
          </li>
          <li className="menu-Link">
            <Link to="/new_arrivals"> New Arrivals</Link>
          </li>
          <li className="menu-Link">
            <Link to="/pre_order"> Pre-order</Link>
          </li>
          <li className="menu-Link">
            <Link to="/bestsellers"> Bestsellers</Link>
          </li>
          <li className="menu-Link">
            <Link to="/textbooks"> TextBooks</Link>
          </li>
          <li className="menu-Link">
            <Link to="/award-winners"> Award Winners</Link>
          </li>
          <li className="menu-Link">
            <Link to="/featured_authors"> Featured Authors</Link>
          </li>
        </ul>
        <Suspense fallback="Loading">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/new_arrivals" element={<New_Arrival />} />
            <Route path="/pre_order" element={<Pre_order />} />
            <Route path="/bestsellers" element={<Bestsellers />} />
            <Route path="/textbooks" element={<Text_books />} />
            <Route path="/award-winners" element={<Award_winners />} />
            <Route path="/featured_authors" element={<Feature_Authors />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default template;
