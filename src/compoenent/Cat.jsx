import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// here i am using styled component to practice.

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem auto;
`;
const CardWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem;
`;
const Card = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 300px;
  width: 300px;
  object-fit: contain;
`;

const Cat = () => {
  const catListByBreed = useSelector((state) => state.cat.catListByBreed);
  const { id } = useParams();

  return (
    <Warpper>
      <h1> {`Catslist based on ${id} Breed `}</h1>
      <CardWarpper>
        {catListByBreed.map((cat) => {
          return (
            <Card>
              <Img src={cat.url} alt="catphoto" />
            </Card>
          );
        })}
      </CardWarpper>
    </Warpper>
  );
};

export default Cat;
