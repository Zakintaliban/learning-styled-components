import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 20px;
  background-color: #222;
  height: 100px;
  width: 100%;
  color: white;
  font-family: "Fira Code", monospace;
  @media screen and (max-width: 425px) {
    font-size: 24px;
    width: 100%;
  }
`;

const Heading = styled.h1`
  text-align: center;
  margin: 20px auto;
  text-shadow: 5px 5px #000;
  cursor: default;
  transition: 0.2s;
  font-size: 32px;
  :hover {
    cursor: default;
    text-shadow: 0px 0px #000;
    transition: 0.2s;
  }
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Heading>Learning Styled-Components in easy way</Heading>
    </Wrapper>
  );
};

export default Header;
