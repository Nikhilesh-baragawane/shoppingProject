import React, { useEffect, useState } from "react";
import axios from "axios";
import "../other_component/Bootstrap.css";

function BookStore() {
  const [book, setBook] = useState([]);
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
      {book.map((v, i) => {
        return (
          <div className="card ">
            <img
              src={v.fields.image[0].url}
              className="card-img-top"
              alt="Pic"
            />
            <div className="card-body">
              <h5 className="card-title">&#8377;{v.fields.price}</h5>
              <p className="card-text">{v.fields.name}</p>
              <p className="card-company">{v.fields.company}</p>
            </div>
            <button type="button" className=" btn">
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default BookStore;
