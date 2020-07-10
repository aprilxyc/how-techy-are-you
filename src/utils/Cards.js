import styled, { css }from 'styled-components';

export const IntroCard = styled.div`
    position        : absolute;
    top             : 300px;
    left            : 300px;
    right           : 300px;
    height          : 300px;
    width           : 500px;
    background-color: #F76C6C;
`;

export const QuizLabel = styled.div`
  width           : 500px;
  height          : 50px;
  text-align      : left;
  border          : 3px solid #FFE400;
  color           : #FFFFFF;
  z-index         : 2;
  transition      : color 200ms ease-in;
  overflow        : hidden;
  background-color: #808080;
  line-height     : 3rem;
  text-align      : center;
  font-family     : 'Fira Sans', sans-serif;
  margin-bottom   : 20px;

      ${({ checked }) => checked && css`
       {
        width     : 500px;
        height    : 50px;
        border    : 3px solid #2ecc71;
        background: transparent;
        color     : #FFFFFF;
      }
      `
    }
`;

export const PageHeader = styled.h1`
  color         : #FFFFFF;
  font-size     : 2.5em;
  letter-spacing: -.025em;
  line-height   : 1.25;
  margin-left   : -.0625em;
`;