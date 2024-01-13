import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout(props) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "36vh" }}>
        <ToastContainer />
        {props.children}
      </main>
      <Footer />
    </>
  );
}
