import "./Header.css";
import React from "react";
import logo from "../../assets/Images/logo-new.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function template() {
  return (
    <div className="header">
      <img src={logo} />

      {/* <span>
        <input
          type="text"
          className="input "
          placeholder="Search by Title, Author"
        />
        <span>
          <FontAwesomeIcon
            icon={faSearch}
            className="icon_search"
          ></FontAwesomeIcon>
        </span>
      </span> */}
      <span>
        <button className="login" type="button" onClick={this.showTable}>
          Login
        </button>
        {this.state.isToggleOn && (
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Body>
              <Modal.Header closeButton></Modal.Header>
              <SignIn />
            </Modal.Body>
          </Modal>
        )}
      </span>
      <span>
        <button type="button" className="signup" onClick={this.showTabl}>
          Signup
        </button>
        {this.state.isToggleO && (
          <Modal show={this.state.sho} onHide={this.handleClos}>
            <Modal.Body>
              <Modal.Header closeButton></Modal.Header>
              <SignUp />
            </Modal.Body>
          </Modal>
        )}
      </span>
      <span className="icon">
        <button type="button" className="btn-sm ">
          <FontAwesomeIcon icon={faCartShopping} className="icon" />
        </button>
      </span>
    </div>
  );
}

export default template;
