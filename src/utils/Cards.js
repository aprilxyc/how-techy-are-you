import styled, { css }from 'styled-components';

export const IntroCard = styled.div`
display         : flex;
margin-top      : 300px;
height          : 500px;
width           : 600px;
top             : 300px;
left            : 300px;
right           : 300px;
background-color: #FFFFFF;
align-items     : center;
justify-content : center;
box-shadow      : 0px 3px 15px rgba(0,0,0,0.2);

transition: 0.5s;
transform : translateX(
  ${({ state }) => (state === "entering" || state === "entered" ? 1300 : 0)}px
);
`;


export const QuizLabel = styled.div`
    font-family     : 'Quicksand', sans-serif;
    box-shadow      : 0px 3px 15px rgba(0,0,0,0.2);
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