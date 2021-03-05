import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

const Mainboard = ({ pins }) => {
  // console.log(pins);
  // pins.forEach((pin) => {
  //   console.log(pin.urls);
  // });
  return (
    <Wrapper>
      <Container>
        ok
        {pins.forEach((pin) => {
          console.log(pin.urls);

          <img
            src="https://images.unsplash.com/photo-1555353540-64580b51c258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMTE5NjF8MHwxfHNlYXJjaHw2fHxjYXJzfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080"
            alt=""
          />;
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
  display: flex;
  width: 80%;
  background-color: yellow;
`;
