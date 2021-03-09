import React from "react";
import styled from "styled-components";
import Starter from "./starter.svg";

const no = (e) => {
  e.preventDefault();
  alert("you can't just copy-paste it, write it lah");
};

// Styled component named StyledButton

const StyledButton = styled.button`
  text-align: center;
  background-color: #44ee77;
  font-size: 30px;
  color: #fff;
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
    box-shadow: 2px 2px #fff;
    text-align: center;
    transition: 0.2s;
    border: 1px solid #fff;
    width: 100px;
    height: 50px;
    margin: 20px;
    padding: 0px;
  }
  :active {
    background-color: #fff;
    color: #000;
    transition: 0.2s;
    border: 1px solid #000;
    box-shadow: 2px 2px #000;
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
        onDragEnd={no}
        style={{ height: "600px", borderRadius: "24px" }}
        src={Starter}
        alt="one"
      />
    </Wrapper>
  );
};

export default Header;
