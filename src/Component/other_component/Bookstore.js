import React, { useEffect, useState } from "react";
import axios from "axios";
import "../other_component/Bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function BookStore() {
  const [book, setBook] = useState([]);
  const [search, setSearch] = useState("");

  const getBooks = () => {
    axios
      .get("https://course-api.com/javascript-store-products")
      .then((response) => {
        console.log(response);
        const myData = response.data;
        setBook(myData);
      })
      .catch(() => {});
  };
  useEffect(() => getBooks(), []);

  return (
    <div>
      <div>
        <span>
          <input
            type="text"
            className="input "
            placeholder="Search by Title, Author"
            onChange={(event) => setSearch(event.target.value)}
          />
          <span>
            <FontAwesomeIcon
              icon={faSearch}
              className="icon_search"
            ></FontAwesomeIcon>
          </span>
        </span>
      </div>
      <div>
        {book
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.fields.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, i) => {
            return (
              <div className="card ">
                <img
                  src={item.fields.image[0].url}
                  className="card-img-top"
                  alt="Pic"
                />
                <div className="card-body">
                  <h5 className="card-title">&#8377;{item.fields.price}</h5>
                  <p className="card-text">{item.fields.name}</p>
                  <p className="card-company">{item.fields.company}</p>
                </div>
                <button type="button" className=" btn">
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default BookStore;
