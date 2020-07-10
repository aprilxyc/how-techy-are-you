import styled, { css }from 'styled-components';

export const IntroCard = styled.div`
    position        : absolute;
    top             : 300px;
    left            : 300px;
    right           : 300px;
    height          : 300px;
    width           : 500px;
    background-color: #4137CB;
`;

export const QuizCardStyle = styled.div`
    height          : 50px;
    width           : 100%;
    text-align      : left;
    background-color: #17141d;
    transition      : color 200ms ease-in;;
    border-radius   : 5px;
    position        : absolute;
    color           : #FFFFFF;
`;

export const QuizLabel = styled.label`
    padding         : 12px 30px;
    width           : 100%;
    display         : block;
    text-align      : left;
    color           : #FFFFFF;
    background-color: #808080;
    cursor          : pointer;
    position        : relative;
    z-index         : 2;
    transition      : color 200ms ease-in;
    overflow        : hidden;
    background-color: #808080;

      ${({ checked }) => checked && css`
       {
        width     : 200px;
        border    : 3px solid #2ecc71;
        background: transparent;
        color     : #2ecc71;
      }
      `
    }
`;
