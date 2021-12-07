import React from "react";
import styled from "styled-components";
import BasedPropsImg from "./BasedProps.svg";

const hey = (e) => {
  e.preventDefault();
  alert("check console");
  console.log(
    "%cIt's supposed to be black, but since we use props. so now the else condition is orange",
    "font-size:24px;color:#FFB001;font-family: 'Roboto', sans-serif;;"
  );
};

const no = (e) => {
  e.preventDefault();
  alert("you can't just copy-paste it, write it lah");
};

const StyledPropsButton = styled.button`
  text-align: center;
  background-color: ${(props) =>
    props.bg === "#FB475E" ? "#FB475E" : "#FFB001"};
  font-size: 1rem;
  color: #000;
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
    border: 1px solid #222;
    width: 100px;
    height: 50px;
    margin: 20px;
    padding: 0px;
  }
  :active {
    background-color: #fff;
    color: #000;
    transition: 0.2s;
    border: 1px solid #222;
    box-shadow: 2px 2px #222;
  }
`;

const Wrapper = styled.div`
  margin: 10px;
  border-radius: 24px;
  background-color: #019992;
  width: 750px;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  :hover {
    box-shadow: 5px 5px 0px 5px #004c48;
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

const Desc = styled.h1`
  font-size: 30px;
  cursor: default;
  color: #fff;
  text-align: center;
  margin: 0px;
`;

const Gambar = styled.img`
  @media screen and (min-width: 320px) {
    border-radius: 24px;
    height: 600px;
  }
`;

const BasedProps = () => {
  return (
    <Wrapper>
      <Desc>this one is using props</Desc>
      <StyledPropsButton bg="#FB475E" type="button">
        A
      </StyledPropsButton>
      <StyledPropsButton bg="#000" type="button" onClick={hey}>
        B
      </StyledPropsButton>
      <Gambar src={BasedPropsImg} onDragEnd={no} alt="two" />
    </Wrapper>
  );
};

export default BasedProps;
