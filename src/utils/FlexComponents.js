import styled from 'styled-components';

export const Grid = styled.div`
`;

export const Row = styled.div`
    display        : flex;
    justify-content: center;
    border-style   : 3px solid #000000;
`;




export const Col = styled.div`
    flex        : ${(props) => props.size};
    border-style: 3px solid #000000;
    width       : 100%;
`;