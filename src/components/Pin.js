import React from "react";
import styled from "styled-components";

const Pin = () => {
  return (
    <Wrapper>
      <Container>
        <img
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
          alt=""
        />
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
