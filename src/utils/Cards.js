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
    font-family     : 'Quicksand', sans-serif;
    box-shadow      : 3px 3px 5px 1px;
    border-radius   : 3px;
    width           : 500px;
    height          : 50px;
    text-align      : left;
    border          : 3px solid #FFFFFF;
    color           : #808080;
    z-index         : 2;
    transition      : color 200ms ease-in;
    overflow        : hidden;
    background-color: #FFFFFF;
    line-height     : 3rem;
    text-align      : center;
    margin-bottom   : 20px;

    &:hover {
        transform: translateY(-3px)
     }

      ${({ checked }) => checked && css`
       {
        width     : 500px;
        height    : 50px;
        border    : 3px solid #FFFFFF;
        background: #1ab8fd;
        color     : #FFFFFF;
      }
      `
    }
`;

export const PageHeader = styled.h1`
  font-family   : 'Quicksand', sans-serif;
  color         : #FFFFFF;
  font-size     : 5em;
  letter-spacing: -.025em;
  line-height   : 1.25;
  margin-left   : -.0625em;
`;