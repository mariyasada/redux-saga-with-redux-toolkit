import React from "react";
import { useSelector } from "react-redux";

const SingleCatDetails = () => {
  const { catDetail } = useSelector((state) => state.cat);

  return (
    <div className="singlecat">
      <img src={catDetail.image.url} alt="singlecatDetail" />
      <div>
        <span>Name: {catDetail.name}</span>
        <span>Origin: {catDetail.origin}</span>
        <span>Description: {catDetail.description}</span>
        <a href={catDetail.vcahospitals_url}>vcahospitals URL</a>
        <a href={catDetail.vetstreet_url}>vetstreet URL</a>
        <a href={catDetail.wikipedia_url}>Wikipedia URL</a>
      </div>
    </div>
  );
};

export default SingleCatDetails;
