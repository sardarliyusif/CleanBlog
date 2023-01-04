import React from "react";
import { Blog } from "../../components/Blog";
import { FirstLook } from "../../components/FirstLook";
import { TrylogIn } from "../../components/TryLogIn";
import "./style.scss";

export const Home = () => {
  const props = {
    src: "https://sb-clean-blog.startbootstrap.com/assets/img/home-bg.jpg",
    head: "Clean Blog",
    context: "Blog Theme by Start Bootstrap",
  };
  return (
    <>
      <FirstLook {...props} />
      <TrylogIn/>
      <Blog/>
      <Blog/>
      <Blog/>
    </>
  );
};
