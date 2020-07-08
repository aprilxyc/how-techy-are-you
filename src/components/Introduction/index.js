import React, { Component } from 'react';
import styled from 'styled-components';

// style components
import { IntroCard } from '../../utils/Cards';

// styled components
const Button = styled.button`
    background   : #4137CB;
    font-size    : 1em;
    margin       : 1em;
    border       : 2px solid;
    border-radius: 3px;
    color        : #FFFFFF;
    padding      : 5px;
`;

class Introduction extends Component {
    render() {
        return (
            <div>
                <IntroCard>
                    <p>Welcome to the quiz</p>
                    <Button primary>Start</Button>
                </IntroCard>
            </div>
        )
    }
}

export default Introduction;