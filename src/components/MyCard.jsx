import React from "react";
import "./MyCard.css";
import { Link } from "react-router-dom";

function MyCard({ title, text, link = "/extrablog", linkText = "Read More" }) {
  return (
    <div>
      <div className="card rounded-xl">
        <div className="card-body ">
          <img src="hacker.png" alt="Hacker illustration" />
          <h5 className="card-title">{title || "Special title treatment"}</h5>
          <p className="card-text">
            {text ||
              "With supporting text below as a natural lead-in to additional content."}
          </p>
          <Link to={link} className="btn btn-primary">
            {linkText}
          </Link>
          <button className="btn btn-secondary">Call Now</button>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
