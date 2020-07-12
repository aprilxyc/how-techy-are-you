import styled from 'styled-components';

export const Grid = styled.div`
`;

export const Row = styled.div`
    display        : flex;
    justify-content: center;
    border-style   : 3px solid #000000;
`;

const media = {
    xs: (styles) => `
    @media only screen and (max-width: 600px) {
        ${styles}
    }
    `,
}

// put your css for mobile stuff into the props area
export const Col = styled.div`
    flex        : ${(props) => props.size};
    border-style: 3px solid #000000;
    width       : 100%;
    ${(props) => props.collapse && media[props.collapse](
        `
        font-size: 0.5em;
        `
    )}
`;