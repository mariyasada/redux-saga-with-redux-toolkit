import React from "react";
import { useSelector } from "react-redux";

const Cat = () => {
  const catListByBreed = useSelector((state) => state.cat.catListByBreed);
  console.log(catListByBreed, "catListByBreed");
  return <div>Cat</div>;
};

export default Cat;
