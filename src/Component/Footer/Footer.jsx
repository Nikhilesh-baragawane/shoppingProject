import React from "react";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Footer() {
  return (
    <div className="main-footer ">
      <div className="container ">
        <div className="row list_item">
          <div className="col ">
            <h6 className="mb-3">Company</h6>
            <ul className="list-unstyled list_item">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col ">
            <h6 className="mb-3">Policies</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Privacy Policies</a>
              </li>
              <li>
                <a href="#">terms of Use</a>
              </li>
              <li>
                <a href="#">Secure Shopping</a>
              </li>
              <li>
                <a href="#">Copyright policies</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="mb-3">Help</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Return</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="mb-3">Misc</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Request a Book</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="mb-3">Follow Us</h6>
            <div className="icons">
              <span>
                <a href="#">
                  <i className=" bi bi-facebook"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className=" bi bi-twitter"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className=" bi bi-instagram"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className=" bi bi-linkedin"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className=" bi bi-youtube"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className=" bi bi-pinterest"></i>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="row ">
          <hr />
          <p className="col-sm footer_term">
            <b> Address:</b> SR Ecommerce Factory Pvt. Ltd., 2/14, ground floor
            , Ansari road , Daryaganj Delhi 110002 | <b>Email: </b>
            <a href="#"> customerservice@bookswagon.com</a>| <b>Phone#:</b>{" "}
            011-41521153
          </p>
          <hr />
        </div>

        <div className="trustpay ">
          <span>
            <img src={require("../../assets/Images/trustpay.png")} />
          </span>

          <span
            class="dc_payment_icons_mini_43 dc_visa2_mini"
            title="Visa"
          ></span>
          <span
            class="dc_payment_icons_mini_43 dc_mastercard2_mini"
            title="Mastercard"
          ></span>
          <span
            class="dc_payment_icons_mini_43 dc_amex2_mini"
            title="American Express"
          ></span>
          <span
            class="dc_payment_icons_mini_43 dc_discover2_mini"
            title="Discover"
          ></span>
          <span
            class="dc_payment_icons_mini_43 dc_electron2_mini"
            title="Visa Electron"
          ></span>
          <span
            class="dc_payment_icons_mini_43 dc_cirrus2_mini"
            title="Cirrus"
          ></span>
          <span className="hh">
            <h5>100% Secure Payment</h5>
            <p>All major credit & debit cards accepted</p>
          </span>
          <span className="copyright">
            <p>Copyright 2017. Bookswagon.com. All Rights Reserved</p>
            <br />
            <ul className="list-unstyled">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & conditions</a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
