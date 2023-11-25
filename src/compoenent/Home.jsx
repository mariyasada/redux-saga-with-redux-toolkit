import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats, getCatID } from "../redux/catSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { catsList, loading } = useSelector((state) => state.cat);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  const cardClickHandler = (cat) => {
    dispatch(getCatID(cat.id));
    navigate(`/cat/${cat.id}`);
  };
  return (
    <>
      <h1>Images of diffrent breed's cats</h1>
      <div className="cat_container">
        {loading ? (
          <p>Loading.....It takes some time to render</p>
        ) : (
          catsList?.map((cat) => (
            <div
              key={cat.id}
              className="card"
              onClick={() => cardClickHandler(cat)}
            >
              <div>
                <img src={cat?.image?.url} alt="cat photo" />
              </div>
              <div>
                <div className="description">
                  <span> Name: {cat.name} ,</span>
                  <span>Origin: {cat.origin} ,</span>
                  <span>Temparement: {cat.temperament}</span>

                  <a href={cat.wikipedia_url}>Wikipedia_url</a>
                </div>
                <p className="paragraph">{cat.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
