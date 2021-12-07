import React from "react";
import styled from "styled-components";

function SCSS() {
  const StyledProfileCard = styled.div`
    margin: 10px;
    border-radius: 24px;
    background-color: #ffb001;
    width: 750px;
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    &:hover {
      box-shadow: 5px 5px 0px 5px #cc8c00;
      margin: 75px;
      width: 800px;
      height: 800px;
      transition: 0.2s;
    }
    @media screen and (max-width: 425px) {
      font-size: 24px;
      width: 100%;
    }

    > .username {
      font-size: 20px;
      color: grey;
      transition: 0.2s;

      &:hover {
        color: red;
      }

      + .dob {
        color: grey;
      }

      + .gender {
        color: grey;
      }
    }
  `;

  return (
    <StyledProfileCard>
      <h1 className="username">John Doe</h1>
      <p className="dob">
        Date: <span>12th October, 2013</span>
      </p>
      <p className="gender">Male</p>
    </StyledProfileCard>
  );
}

export default SCSS;
