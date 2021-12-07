import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  margin: 10px;
  border-radius: 24px;
  background-color: #fb475e;
  width: 750px;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  :hover {
    box-shadow: 5px 5px 0px 5px #960317;
    margin: 75px;
    width: 800px;
    height: 800px;
    transition: 0.2s;
  }
  @media screen and (max-width: 425px) {
    font-size: 24px;
    width: 100%;
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function Animation() {
  return (
    <Wrapper>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </Wrapper>
  );
}

export default Animation;
