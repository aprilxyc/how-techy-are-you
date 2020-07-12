import React from 'react';
import styled from 'styled-components';

// icon
import circleCheck from '../../icons/check-circle-solid.svg';

const CheckboxContainer = styled.div`
    display      : inline-block;
    margin-top   : 20px;
    margin-right : 20px;
    margin-bottom: 20px;
    float        : right;
`;

const TickIcon = styled.img`
  width : 20px;
  height: 20px;
  margin: 0px 30px 25px 0px;
`;

const StyledCheckbox = styled.div`
width         : 20px;
height        : 20px;
border-radius : 20px;
box-shadow    : 0 0 0 3px #666668;
transition    : all 200ms;
vertical-align: middle;

    ${TickIcon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    }
`;

// adds the attribute checkbox
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border     : 0;
    clip       : rect(0 0 0 0);
    clippath   : inset(50%);
    height     : 1px;
    clip       : rect(0 0 0 0);
    margin     : -1px;
    overflow   : hidden;
    padding    : 0;
    position   : absolute;
    white-space: nowrap;
    width      : 1px;
`;

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props}/>
                <StyledCheckbox checked={checked} {...props}>
                    <TickIcon src={circleCheck} />
                </StyledCheckbox>
    </CheckboxContainer>
)

export default Checkbox;

