import styled from "styled-components";

export const Animation = styled.div`
  transition: 0.5s;
  transform : translateX(
    ${({ state }) => (state === "entering" || state === "entered" ? 1000 : 0)}px
  );

  background: ${({ state }) => {
    switch (state) {
      case "entering": 
        return "red";
      case "entered": 
        return "blue";
      case "exiting": 
        return "green";
      case "exited": 
        return "yellow";
    }
  }};
`;
