import styled from "styled-components";

export const PageHeader = styled.h1`
  font-family   : "Quicksand", sans-serif;
  color         : #ffffff;
  font-size     : 5em;
  letter-spacing: -0.025em;
  line-height   : 1.25;
  margin-left   : -0.0625em;

  @media only screen and (max-width: 600px) {
    font-size     : 2.5em;
    letter-spacing: -0.025em;
  }
`;

export const StyledParagraph = styled.h3`
  position      : relative;
  top           : -40px;
  left          : 80px;
  font-family   : "Quicksand", sans-serif;
  color         : #000000;
  font-size     : 20px;
  letter-spacing: -0.05em;
`;