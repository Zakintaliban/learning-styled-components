import React from "react";
import styled from "styled-components";
import Starter from "./starter.svg";
// Styled component named StyledButton
const StyledButton = styled.button`
  text-align: center;
  background-color: black;
  font-size: 30px;
  color: white;
  border-radius: 10px;
  border: 0px;
  font-family: "Fira Code", monospace;
  transition: 0.2s;
  overflow: hidden;
  width: 100px;
  height: 50px;
  margin: 10px;
  padding: 0px;
  :hover {
    box-shadow: 2px 2px #222;
    text-align: center;
    transition: 0.2s;
    border: solid #222;
    width: 100px;
    height: 50px;
    margin: 20px;
    padding: 0px;
  }
`;
const Wrapper = styled.div`
  border-radius: 24px;
  background-color: #be185d;
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  :hover {
    box-shadow: 5px 5px 0px 5px #5b0b2c;
    margin: 75px;
    width: 750px;
    height: 750px;
    transition: 0.2s;
  }
`;

const Desc = styled.h1`
  font-size: 30px;
  cursor: default;
  color: #fff;
  text-align: center;
  margin: 0px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Desc>this is a starter</Desc>
      <StyledButton> Login </StyledButton>
      <img
        style={{ height: "550px", borderRadius: "24px" }}
        src={Starter}
        alt="one"
      />
    </Wrapper>
  );
};

export default Header;
