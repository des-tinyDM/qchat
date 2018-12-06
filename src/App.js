import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <section className="page" />
        <Footer />
      </div>
    );
  }
}

export default App;
