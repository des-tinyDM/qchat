import React, { Component } from "react";
import "./css/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Main } from "./routes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <section className="page">{Main}</section>
        <Footer />
      </div>
    );
  }
}

export default App;
