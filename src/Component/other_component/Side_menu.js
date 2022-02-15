import React from "react";
import "./Side_menu.css";

export default function Side_menu() {
  const list_menu = [
    "Architecture",
    "Arts & Photography",
    "Biographies & Memoirs",
    "Body, Mind & Spirit",
    "Business & Economics",
    "Children & Teens",
    "Computer & Internet",
    "Cookery, Food & Wine",
    "Dictionaries & Language",
    "English Language Teaching",
    "Environment & Geography",
    "Fiction",
    "History & Humanities",
    "Law",
    "Lifestyle",
    "Literature & literary studies",
    "Medicine",
    "Music,",
    "Nursing",
    "Parenting, Family & Health",
    "Politics & Current Events",
    "Public administration",
    "References & Encyclopaedias",
    "Religion & Spirituality",
  ];

  return (
    <div>
      <h5 className="heading_title">Browse By Category</h5>
      <ul className="list_menu">
        {list_menu.map((v, i) => {
          return (
            <li key={i}>
              <a href="#" className="list">
                {v}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
