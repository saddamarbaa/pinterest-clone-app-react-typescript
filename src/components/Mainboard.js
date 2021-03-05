import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

const Mainboard = () => {
  return (
    <Wrapper>
      <Container>
        <Pin />
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
  display: flex;
  width: 80%;
  background-color: yellow;
`;
