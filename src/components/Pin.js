import React from "react";
import styled from "styled-components";

const Pin = ({ urls }) => {
  return (
    <Wrapper>
      <Container>
        <img src={urls?.regular} alt="" />
      </Container>
    </Wrapper>
  );
};

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 260px;

  img {
    display: flex;
    width: 100%;
    border-radius: 16px;
    cursor: zoom-in;
    object-fit: cover;
  }
`;
