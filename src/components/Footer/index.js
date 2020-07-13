import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    position      : relative;
    margin-top    : 20px;
    padding-bottom: 20px;
    color         : #FFFFFF;
`;

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                Monash Association of Coding {new Date().getFullYear()}
            </StyledFooter>
        )
    }
}

export default Footer