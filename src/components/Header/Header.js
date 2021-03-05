import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 20px;
  background-color: #0d3a58;
  height: 100px;
  width: 100%;
  margin: auto 10px;
  font-size: 32px;
  color: white;
  font-family: "Fira Code", monospace;
`;

const Heading = styled.h2`
  text-align: center;
  margin: auto 0px;
  text-shadow: 5px 5px #000;
  cursor: default;
  transition: 0.2s;
  :hover {
    cursor: default;
    text-shadow: 0px 0px #000;
    transition: 0.2s;
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
