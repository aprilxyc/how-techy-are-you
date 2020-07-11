import styled from "styled-components";

export const StartButton = styled.button`
  position        : relative;
  top             : 60px;
  right           : 156px;
  border          : none;
  display         : block;
  text-align      : center;
  cursor          : pointer;
  text-transform  : uppercase;
  outline         : none;
  overflow        : hidden;
  color           : #fff;
  font-weight     : 700;
  font-size       : 15px;
  background-color: #4137cb;
  padding         : 17px 60px;
  box-shadow      : 0 5px 15px rgba(0, 0, 0, 0.2);

  :after {
    content           : "";
    position          : absolute;
    left              : 0;
    top               : 0;
    height            : 490%;
    width             : 140%;
    background        : #ffe430;
    -webkit-transition: all 0.5s ease-in-out;
    transition        : all 0.5s ease-in-out;
    -webkit-transform : translateX(-98%) translateY(-25%) rotate(45deg);
    transform         : translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform        : translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;
