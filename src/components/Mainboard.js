import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import { v4 as uuidv4 } from "uuid";
import "./Mainboard.css";

const Mainboard = ({ pins }) => {
  return (
    <Wrapper>
      <Container>
        {pins.map((pin) => {
          let imageUrls = pin.urls;

          // return the result to pin component
          return <Pin urls={imageUrls} key={uuidv4()} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Mainboard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 15px;
`;

const Container = styled.div`
  max-width: 1260px;
  height: 100%;
  column-count: 5;
  column-gap: 10px;

  margin: 0 auto;
  background-color: white;

  img {
    margin: 2px;
  }
`;
