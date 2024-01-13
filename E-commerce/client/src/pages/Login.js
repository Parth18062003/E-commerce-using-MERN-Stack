import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../context/auth";
import { Toast, ToastContainer } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [auth, setAuth] = useAuth();
  const [showSuccessToast, setShowSuccessToast] = useState(false);
const [showErrorToast, setShowErrorToast] = useState(false);


  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform validation
      const errors = {};

      if (!email) {
        errors.email = "Email is required";
      }

      if (!password) {
        errors.password = "Password is required";
      }

      setErrors(errors);
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        displaySuccessToast();
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      displayErrorToast();
    }
  };

  const displaySuccessToast = () => {
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 5000); // Hide after 3 seconds
  };
  
  const displayErrorToast = () => {
    setShowErrorToast(true);
    setTimeout(() => setShowErrorToast(false), 5000); // Hide after 3 seconds
  };
  
  return (
    <>
    <Layout>
      <div className="content mt-5" id="loginform">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-xs-1"></div>
            <div className="col-lg-4 col-md-6 col-xs-10">
              <div className="container-fluid" id="formbox1">
                <div className="d-flex justify-content-center mt-2">
                  <h2 className="mt-3">Login</h2>
                </div>
                <div className="container mt-4">
                  <div className="d-flex flex-column">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
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
                          className={`form-control ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          id="inputPassword"
                          placeholder="enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                      <Link
                        to="/"
                        className="text-body-secondary link-offset-2 link-underline link-underline-opacity-0 "
                      >
                        <small>Forgot password?</small>
                      </Link>
                    </div>
                    <div className="mb-3 mt-3">
                      <div className="d-flex justify-content-around">
                        <Link to="/sign-up">
                          <button
                            type="button"
                            className="btn btn-light btn-outline-dark"
                            id="loginbtn"
                          >
                            Sign Up
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-light btn-outline-dark"
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-xs-1"></div>
          </div>
        </div>
      </div>
    </Layout>
    <ToastContainer position="top-end">
    <Toast show={showSuccessToast} bg="success" text="white">
      <Toast.Body>Login successful!</Toast.Body>
    </Toast>
  
    <Toast show={showErrorToast} bg="danger" text="white">
      <Toast.Body style={{color:'white'}}>Login failed. Please check your credentials.</Toast.Body>
    </Toast>
  </ToastContainer>
  
    </>
  );
}

export default Login;
