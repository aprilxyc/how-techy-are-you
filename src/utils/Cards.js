import styled, { css } from "styled-components";

export const IntroCard = styled.div`
  display         : flex;
  margin-top      : 300px;
  height          : 500px;
  width           : 600px;
  top             : 300px;
  left            : 300px;
  right           : 300px;
  background-color: #ffffff;
  align-items     : center;
  justify-content : center;
  box-shadow      : 0px 3px 15px rgba(0, 0, 0, 0.2);
  font-family     : "Quicksand", sans-serif;

  transition: 0.5s;
  transform : translateX(
    ${({ state }) => (state === "entering" || state === "entered" ? 1800 : 0)}px
  );
`;

export const QuizLabel = styled.div`
  font-family     : "Quicksand", sans-serif;
  box-shadow      : 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius   : 3px;
  width           : 500px;
  height          : 50px;
  text-align      : left;
  border          : 3px solid #ffffff;
  color           : #808080;
  z-index         : 2;
  transition      : color 200ms ease-in;
  overflow        : hidden;
  background-color: #ffffff;
  line-height     : 3rem;
  text-align      : center;
  margin-bottom   : 20px;

  &:hover {
    transform: translateY(-3px);
  }

  ${({ checked }) =>
    checked &&
    css`
       {
        width     : 500px;
        height    : 50px;
        border    : 3px solid #ffffff;
        background: #1ab8fd;
        color     : #ffffff;
      }
    `}
`;

export const PageHeader = styled.h1`
  font-family   : "Quicksand", sans-serif;
  color         : #ffffff;
  font-size     : 5em;
  letter-spacing: -0.025em;
  line-height   : 1.25;
  margin-left   : -0.0625em;
`;
