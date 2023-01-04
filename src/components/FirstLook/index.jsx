import React from "react";
import "./style.scss";

export const FirstLook = ({ src, context, head }) => {
  return (
    <section className="first-look">
      <img className="first-look__bg" src={src} alt="img" />
      <div className="first-look__content">
        <h2 className="first-look__content__head">{head}</h2>
        <p className="first-look__content__context">{context}</p>
      </div>
    </section>
  );
};
