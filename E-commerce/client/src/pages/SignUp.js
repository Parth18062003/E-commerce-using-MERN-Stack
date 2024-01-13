import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Form, Col, Row } from "react-bootstrap";
import { Toast, ToastContainer } from "react-bootstrap";

import axios from "axios";

function SignUp() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const displaySuccessToast = () => {
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000); // Hide after 3 seconds
  };
  
  const displayErrorToast = () => {
    setShowErrorToast(true);
    setTimeout(() => setShowErrorToast(false), 3000); // Hide after 3 seconds
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState({
    building: "",
    sector: "",
    town: "",
    city: "",
    pin: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        firstname,
        lastname,
        username,
        email,
        password,
        phone,
        address,
      });
      if (res.data.success) {
        displaySuccessToast();
        navigate("/login");
      } else {
        displayErrorToast();
      }
    } catch (error) {
      console.log(error);
      displayErrorToast();
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  return (
    <>
    <Layout>
      <div className="content mt-5" id="signupform">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-3 col-md-1 col-xs-1"></div>
            <div className="col-lg-6 col-md-11 col-xs-11">
              <div className="container-fluid" id="formbox2">
                <div className="d-flex justify-content-center mt-2">
                  <h2 className="mt-3">Sign Up</h2>
                </div>
                <div className="container mt-4">
                  <div className="d-flex flex-column">
                    <Row className="mb-3">
                      <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          placeholder="John"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                        />
                      </Col>
                      <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          placeholder="Doe"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User1234"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="1234567890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="inputPassword"
                        className="col col-form-label"
                      >
                        Re-enter Password
                      </label>
                      <div className="col">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword"
                          placeholder="re-enter password"
                          required
                        />
                      </div>
                    </div>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Row className="align-items-center">
                        <Col className="mt-1">
                          <Form.Control
                            type="text"
                            placeholder="Building"
                            name="building"
                            value={address.building}
                            onChange={handleAddressChange}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Sector"
                            name="sector"
                            value={address.sector}
                            onChange={handleAddressChange}
                            required
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Town"
                            name="town"
                            value={address.town}
                            onChange={handleAddressChange}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="City"
                            name="city"
                            value={address.city}
                            onChange={handleAddressChange}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Pin"
                            name="pin"
                            value={address.pin}
                            onChange={handleAddressChange}
                            required
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                    <div className="mb-3 mt-3">
                      <div className="form-btn d-flex justify-content-around">
                        <Link to="/login">
                          <button
                            type="button"
                            className="btn btn-light btn-outline-dark"
                            id="loginbtn"
                            style={{ width: "10em" }}
                          >
                            Login
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-light btn-outline-dark"
                          onClick={handleSubmit}
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-1 col-xs-1"></div>
          </div>
        </div>
      </div>
    </Layout>
    <ToastContainer position="bottom-end">
    <Toast show={showSuccessToast} bg="success" text="white">
      <Toast.Body>User registered successfully!</Toast.Body>
    </Toast>
  
    <Toast show={showErrorToast} bg="danger" text="white">
      <Toast.Body>Something went wrong. Please try again.</Toast.Body>
    </Toast>
  </ToastContainer>
  </>
  );
}

export default SignUp;
