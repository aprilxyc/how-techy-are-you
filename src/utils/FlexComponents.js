import styled from 'styled-components';

export const Grid = styled.div`
`;

export const Row = styled.div`
    display        : flex;
    justify-content: center;
`;

const media = {
    xs: (styles) => `
    @media only screen and (max-width: 600px) {
        ${styles}
    }
    `,
}

// collapse prop is for responsiveness
export const Col = styled.div`
    flex : ${(props) => props.size};
    width: 100%;
    ${(props) => props.collapse && media[props.collapse](
        `
        font-size: 0.5em;
        `
    )}
`;