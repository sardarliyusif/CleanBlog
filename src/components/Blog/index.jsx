import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const Blog = () => {
  return (
    <section className="blog container">
      <Link className="blog__link" to="#">
        <h3 className="blog__link__name">
          Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut
          minim reprehenderit.
        </h3>
        <p className="blog__link__info">Labore irure irure laborum quis tempor aliqua. Dude</p>
      </Link>
      <p className="blog__date">February 19, 2020</p>
    </section>
  );
};
