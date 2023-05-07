import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
const Logo = () => (
  <a href="/">
    <img
      src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/delivery-rocket-by-fishdesigns61025-brandcrowd.png"
      id="logo"
    ></img>
  </a>
);
const Header = () => (
  <>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>

    <h1>Head</h1>
  </>
);

const Ele = () => (
  <>
    <Header></Header>
    <h1>Food Ordering App</h1>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Ele />);
