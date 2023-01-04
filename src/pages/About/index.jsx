import React from "react";
import { FirstLook } from "../../components/FirstLook";

export const About = () => {
  const props = {
    src: "https://www.arkitectureonweb.com/documents/77789/2952830/TopImage.jpg/505d9092-0542-f1a0-3453-022c44505e26?t=1564139721278",
    head: "About Me",
    context: "This is what I do",
  };
  return (
    <>
      <FirstLook {...props} />
    </>
  );
};
