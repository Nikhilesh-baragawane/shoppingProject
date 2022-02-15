import "./Home.css";
import React from "react";
import Corousel from "../other_component/corousel";
import BookStore from "../other_component/Bookstore";
import Side_menu from "../other_component/Side_menu";
import Footer from "../Footer";
function template() {
  return (
    <div className="home">
      <div>
        <div className="row">
          <div className="col-3">
            <Side_menu />
          </div>
          <div className="col-9">
            <div className="corol">
              <Corousel />
            </div>
            <div className="Bookstore">
              <BookStore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default template;
